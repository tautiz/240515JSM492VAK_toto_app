import {IModel} from "./Models/Interfaces/IModel";
import {Task} from "./Models/Task";
import {User} from "./Models/User";
import {TaskManager} from "./Managers/TaskManager";
import {Printer} from "./Services/Printer";
import './css/sakura.css';
import './css/styles.css';
import './css/sass/test.scss';
import { log } from "console";

// ---------- NENURASINETI -------------------------------------------
const taskManager = new TaskManager();

let htmlWriter = async (item: IModel): Promise<void> => {
    const listElement = document.getElementById("tasksList") as HTMLUListElement;
    const listItem: HTMLLIElement = document.createElement("li");
    listItem.textContent = item.getTitle();
    // Sukuriam mygtuka salinimui
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", async () => {
        if (item instanceof Task) {
            await taskManager.remove(item);
            taskPrinter.printAll();
        }
    });
    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);
}
let htmlClear = () => {
    const listElement = document.getElementById("tasksList") as HTMLUListElement;
    listElement.innerHTML = '';
}

const taskPrinter: Printer = new Printer(taskManager, { write: htmlWriter, clear: htmlClear });

// ---------- Funkcijos skirtos Event Listeneriams -------------------
function createTask(): void {
    const kamPriklauso = new User('Tautvydas');
    const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
    const taskTitle: string = taskElement.value;
    const taskItem = new Task (taskTitle, kamPriklauso.getId());
    taskManager.create(taskItem);
    taskPrinter.printAll()
}

// ---------- EVENT Listeneriai --------------------------------------
const createButton = document.getElementById("createButton") as HTMLButtonElement;
createButton.addEventListener("click", createTask);

document.addEventListener('DOMContentLoaded', () => taskPrinter.printAll());









