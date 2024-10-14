import {IModel} from "./Models/IModel";
import {Task} from "./Models/Task";
import {User} from "./Models/User";
import {TaskManager} from "./Managers/TaskManager";
import {Printer} from "./Services/Printer";

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

// ---------- Funkcijos skirtos Event Listeneriams -------------------
function createTask(): void {
  const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
  const taskTitle: string = taskElement.value;
  const kamPriklauso = new User('Tautvydas');
  const taskItem = new Task (taskTitle, kamPriklauso.getId());
  taskManager.add(taskItem);
  taskPrinter.printAll()
}
// ---------- EVENT Listeneriai --------------------------------------
const createButton = document.getElementById("createButton") as HTMLButtonElement;
createButton.addEventListener("click", createTask);











