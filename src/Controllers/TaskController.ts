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

        this.initialize();
    }

    private initialize(): void {
        // Patikrink serverio būseną
        this.checkServerStatus();

        // Iškviečia užduočių atnaujinimą, kai puslapis įkraunamas
        document.addEventListener('DOMContentLoaded', () => {
            this.outputHandler.handle().catch(error => {
                this.view.showError('Nepavyko įkelti užduočių.');
            });
        });

        // Užduoties kūrimo mygtuko event listeneris
        const createButton = document.getElementById("createButton") as HTMLButtonElement;
        createButton.addEventListener("click", () => this.createTask());
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
            await this.taskManager.create(taskItem);
            this.outputHandler.handle();
            taskElement.value = '';
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            this.view.showError('Nepavyko sukurti užduoties.');
        }
    }
}