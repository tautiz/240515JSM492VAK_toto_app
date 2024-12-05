/**
 * Pagrindinis aplikacijos failas, kuris inicializuoja programą
 * 
 * Šis failas naudoja modulinę struktūrą (imports), kas leidžia:
 * 1. Lengvai pridėti/šalinti funkcionalumą
 * 2. Geriau organizuoti kodą pagal atsakomybes
 * 3. Išvengti globalių kintamųjų konfliktų
 */

// Importuojame CSS failus, kad būtų užkrauti stiliai
import './css/styles.css';
import './css/login.css';

// Importuojame reikalingas klases iš atskirų modulių
// Toks atskyrimas padeda lengviau prižiūrėti kodą ir laikytis "Single Responsibility" principo
import { TaskController } from './Controllers/TaskController';
import { ServerHealthService } from './Services/ServerHealthService';
import { AuthService } from './Services/AuthService';
import { LoginView } from './Views/LoginView';
import { createContainer } from './container';

// Inicializuojame container'į, kuris automatiškai inicializuoja AuthService
createContainer();

// Tikriname ar vartotojas yra prisijungęs ieškodami autentifikacijos žetono (token)
const token = AuthService.getToken();

// Aplikacijos logika skaidoma į dvi dalis:
if (!token) {
    // 1. Jei vartotojas neprisijungęs - rodome prisijungimo formą
    // LoginView klasė atsakinga už prisijungimo sąsajos atvaizdavimą
    const loginView = new LoginView(() => {
        window.location.reload();
    });
    document.body.appendChild(loginView.getElement());
} else {
    // 2. Jei vartotojas prisijungęs - inicializuojame pagrindinį aplikacijos funkcionalumą
    
    // TaskController tvarko užduočių logiką (CRUD operacijas)
    const taskController = new TaskController();
    
    // Inicializuojame serverio būsenos tikrinimo servisą
    // Naudojame Singleton pattern'ą, kad turėtume tik vieną serviso instanciją
    const serverHealthService = ServerHealthService.getInstance();
    
    // Pradedame periodiškai tikrinti serverio būseną
    // Kai serveris veikia, užkrauname užduočių sąrašą
    // Tai padeda užtikrinti, kad duomenys bus atnaujinti tik kai serveris yra pasiekiamas
    serverHealthService.startChecking(() => {
        taskController.loadTasks();
    });
}