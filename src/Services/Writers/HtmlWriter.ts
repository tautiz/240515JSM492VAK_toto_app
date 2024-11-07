import IWriter from "./IWriter";
import { Task } from "../../Models/Task";
import { IModel } from "../../Models/Interfaces/IModel";
import IManager from "../../Managers/IManager";

export default class HtmlWriter implements IWriter {

    constructor(private manager: IManager) {}

    async write(item: IModel): Promise<void> {
        const listElement = document.getElementById("tasksList") as HTMLUListElement;
        const listItem: HTMLLIElement = document.createElement("li");
        listItem.textContent = item.getTitle();
        // Sukuriam mygtuka salinimui
        const deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", async () => {
            if (item instanceof Task) {
                await this.manager.remove(item);
            }
        });
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    }
    
    clear(): void {
        const listElement = document.getElementById("tasksList") as HTMLUListElement;
        listElement.innerHTML = '';
    }
}