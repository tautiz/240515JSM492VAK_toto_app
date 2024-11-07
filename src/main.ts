import {IModel} from "./Models/Interfaces/IModel";
import {Task} from "./Models/Task";
import {User} from "./Models/User";
import {TaskManager} from "./Managers/TaskManager";
import {OutputHandler} from "./Services/OutputHandler";
import HtmlWriter from "./Services/Writers/HtmlWriter";
import './css/sakura.css';
import './css/styles.css';
import './css/sass/test.scss';

// ---------- NENURASINETI -------------------------------------------
async function checkServerStatus() {
    try {
        const response = await fetch('http://localhost:3000/health');
        if (!response.ok) {
            throw new Error('Serveris neveikia');
        }
    } catch (error) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = 'Klaida: Nepavyko prisijungti prie serverio. Prašome patikrinti ar serveris paleistas.';
        document.body.prepend(errorElement);
        throw new Error('Serveris nepasiekiamas');
    }
}

checkServerStatus();

// ---------- END NENURASINETI ---------------------------------------

const taskManager = new TaskManager();
const htmlWriter = new HtmlWriter(taskManager);
const outputHandler: OutputHandler = new OutputHandler(taskManager, htmlWriter);

// ---------- Funkcijos skirtos Event Listeneriams -------------------
function createTask(): void {
    // TODO: Work in progress, get logged In user
    const user = new User('Tautvydas');
    user.setId("1234");
    // TODO: End of get logged In user

    const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
    const taskTitle: string = taskElement.value;
    const taskItem = new Task (taskTitle, user.getId());
    taskManager.create(taskItem).then(() => outputHandler.handle());
}

// ---------- EVENT Listeneriai --------------------------------------
const createButton = document.getElementById("createButton") as HTMLButtonElement;
createButton.addEventListener("click", createTask);

document.addEventListener('DOMContentLoaded', () => outputHandler.handle());









