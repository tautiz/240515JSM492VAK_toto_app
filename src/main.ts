import {IModel} from "./Models/Interfaces/IModel";
import {Task} from "./Models/Task";
import {User} from "./Models/User";
import {TaskManager} from "./Managers/TaskManager";
import {Printer} from "./Services/Printer";
import './css/sakura.css';
import './css/styles.css';
import './css/sass/test.scss';

// ---------- NENURASINETI -------------------------------------------
const taskManager = new TaskManager();
let consoleWriter = console.log;
let htmlWriter = (item: IModel): void => {
    const listElement = document.getElementById("tasksList") as HTMLUListElement;
    const listItem: HTMLLIElement = document.createElement("li");
    listItem.textContent = item.getTitle();
    listElement.appendChild(listItem);
}
const taskPrinter: Printer = new Printer(taskManager, htmlWriter);
const kamPriklauso = new User('Tautvydas');

// ---------- Funkcijos skirtos Event Listeneriams -------------------
function createTask(): void {
  const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
  const taskTitle: string = taskElement.value;
  const taskItem = new Task (taskTitle, kamPriklauso.getId());
  taskManager.createTask(taskItem);
  taskPrinter.printAll()
}

async function PrintAllTasks(): Promise<void> {
    const tasks: Response = await fetch('http://localhost:3000/todo');
    const tasksJson = await tasks.json();

    tasksJson.forEach((taskData: any): void => {
        const taskItem = new Task (taskData.title, kamPriklauso.getId());
        taskManager.add(taskItem);
    })
    taskPrinter.printAll(); // Sita vieta pas visus skirsis nuo mano eilutes. Cia tiesiog kvieciam pritinimo funkcija.
}

// ---------- EVENT Listeneriai --------------------------------------
const createButton = document.getElementById("createButton") as HTMLButtonElement;
createButton.addEventListener("click", createTask);

document.addEventListener('DOMContentLoaded', PrintAllTasks);










