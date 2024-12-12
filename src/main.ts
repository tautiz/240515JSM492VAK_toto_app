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
import { TaskView } from './Views/TaskView';
import { AuthService } from './Services/AuthService';
import { LoginView } from './Views/LoginView';
import { createContainer } from './container';

createContainer();

const token = AuthService.getToken();
let view = null;

if (!token) {
    view = new LoginView().getElement();
} else {
    view = new TaskView().getElement();
}

document.querySelector('#app')?.appendChild(view);