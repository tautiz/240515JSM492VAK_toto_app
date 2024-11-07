import IWriter from "./IWriter";
import { Task } from "../../Models/Task";
import { IModel } from "../../Models/Interfaces/IModel";
import IManager from "../../Managers/IManager";

export class HtmlWriter implements IWriter {

    constructor(private manager: IManager) {}

    async write(item: IModel): Promise<void> {
        const listElement = document.getElementById("todo-list") as HTMLDivElement;

        const taskItemHtml = `
        <div class="todo-item">
          <input type="checkbox" id="task_${item.getId()}" class="todo-checkbox">
          <label for="task_${item.getId()}" class="todo-label">${item.getTitle()}</label>

          <input type="checkbox" id="del_${item.getId()}" class="delete-checkbox" data-id="${item.getId()}">
          <label for="del_${item.getId()}" class="delete-label" >×</label>
        </div>
        `
        listElement.innerHTML += taskItemHtml;
    }
    
    clear(): void {
        const listElement = document.getElementById("todo-list") as HTMLDivElement;
        listElement.innerHTML = '';
    }
}