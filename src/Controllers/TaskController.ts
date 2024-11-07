import { TaskManager } from "../Managers/TaskManager";
import { HtmlWriter } from "../Services/Writers/HtmlWriter";
import { OutputHandler } from "../Services/OutputHandler";
import { TaskView } from "../Views/TaskView";
import { Task } from "../Models/Task";
import { User } from "../Models/User";

export class TaskController {
    private taskManager: TaskManager;
    private outputHandler: OutputHandler;
    private view: TaskView;

    constructor() {
        this.taskManager = new TaskManager();
        const htmlWriter = new HtmlWriter(this.taskManager);
        this.outputHandler = new OutputHandler(this.taskManager, htmlWriter);
        this.view = new TaskView(htmlWriter);

        document.addEventListener('DOMContentLoaded', () => this.initialize());
    }

    private initialize(): void {
        // Patikrink serverio būseną
        this.checkServerStatus();

        // Iškviečia užduočių atnaujinimą, kai puslapis įkraunamas
        this.outputHandler.handle().catch(error => {
            this.view.showError('Nepavyko įkelti užduočių.');
        });

        // Užduoties kūrimo mygtuko event listeneris
        const createButton = document.querySelector(".todo-form > button") as HTMLButtonElement;
        createButton.addEventListener("click", () => this.createTask());

        // Ištrynimo mygtukų event listeneris (delegate)
        const tasksList = document.getElementById("todo-list") as HTMLDivElement;
        tasksList.addEventListener("click", (event) => this.handleDelete(event));
    }

    private async checkServerStatus(): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/health');
            if (!response.ok) {
                throw new Error('Serveris neveikia');
            }
        } catch (error) {
            this.view.showError('Nepavyko prisijungti prie serverio. Prašome patikrinti ar serveris paleistas.');
            throw new Error('Serveris nepasiekiamas');
        }
    }

    private async createTask(): Promise<void> {
        try {
            const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
            const taskTitle: string = taskElement.value;

            if (!taskTitle.trim()) {
                this.view.showError('Užduoties pavadinimas negali būti tuščias.');
                return;
            }

            const user = new User('Tautvydas');
            user.setId("1234");

            const taskItem = new Task(taskTitle, user.getId());
            await this.taskManager.create(taskItem).then(() => this.outputHandler.handle());
            taskElement.value = '';
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            this.view.showError('Nepavyko sukurti užduoties.');
        }
    }

    private async handleDelete(event: Event): Promise<void> {
        const target = event.target as HTMLElement;
        if (target && target.classList.contains('delete-checkbox')) {
            const taskId = target.getAttribute('data-id');
            if (taskId) {
                const confirmed = confirm('Ar tikrai norite ištrinti šią užduotį?');
                if (confirmed) {
                    try {
                        const task = await this.taskManager.getById(taskId);
                        if (task) {
                            await this.taskManager.remove(task);
                            await this.outputHandler.handle();
                        } else {
                            this.view.showError('Užduotis nerasta.');
                        }
                    } catch (error) {
                        console.error('Nepavyko ištrinti užduoties:', error);
                        this.view.showError('Nepavyko ištrinti užduoties.');
                    }
                }
            }
        }
    }
}