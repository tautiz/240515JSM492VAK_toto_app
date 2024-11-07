import IWriter from "./IWriter";
import { Task } from "../../Models/Task";
import { IModel } from "../../Models/Interfaces/IModel";
import IManager from "../../Managers/IManager";

export class HtmlWriter implements IWriter {

    constructor(private manager: IManager) {}

    async write(item: IModel): Promise<void> {
        const listElement = document.getElementById("tasksList") as HTMLUListElement;
        const listItem: HTMLLIElement = document.createElement("li");
        listItem.textContent = item.getTitle();
        listItem.classList.add('task');

        // Sukuriam mygtuka salinimui su data-id atributu
        const deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.setAttribute('data-id', item.getId());

        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    }
    
    clear(): void {
        const listElement = document.getElementById("tasksList") as HTMLUListElement;
        listElement.innerHTML = '';
    }
}