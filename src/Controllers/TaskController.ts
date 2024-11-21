/**
 * TaskController - pagrindinis užduočių valdymo kontroleris
 * 
 * Šis kontroleris realizuoja MVC (Model-View-Controller) architektūros principus:
 * - Modelis: Task ir User klasės
 * - Vaizdas: HtmlWriter klasė
 * - Kontroleris: Ši TaskController klasė
 * 
 * Toks atskyrimas leidžia:
 * 1. Lengvai keisti vaizdavimo logiką (pvz., iš HTML į kitą formatą)
 * 2. Atskirti biznio logiką nuo atvaizdavimo
 * 3. Lengviau testuoti atskirus komponentus
 */

import { TaskManager } from "../Managers/TaskManager";
import { HtmlWriter } from "../Services/Writers/HtmlWriter";
import { OutputHandler } from "../Services/OutputHandler";
import { Task } from "../Models/Task";
import { User } from "../Models/User";
import { NotificationService } from "../Services/NotificationService";
import { AuthService } from "../Services/AuthService";
import '../css/notifications.css';

export class TaskController {
    // Privačios klasės savybės užtikrina enkapsuliaciją
    private taskManager: TaskManager;
    private outputHandler: OutputHandler;
    private notificationService: NotificationService;

    constructor() {
        // Inicializuojame reikalingus servisus
        this.taskManager = new TaskManager();
        const htmlWriter = new HtmlWriter(this.taskManager);
        this.outputHandler = new OutputHandler(this.taskManager, htmlWriter);
        this.notificationService = NotificationService.getInstance();

        // Praplečiame globalų fetch metodą, kad pridėtume autorizacijos antraštę
        // Tai leidžia centralizuotai valdyti autentifikaciją visiems API kreipiniams
        const originalFetch = window.fetch;
        window.fetch = async function(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
            const token = AuthService.getToken();
            if (token) {
                init = init || {};
                init.headers = {
                    ...init.headers,
                    'Authorization': `Bearer ${token}`
                };
            }
            
            const response = await originalFetch.call(window, input, init);
            
            // Automatiškai apdorojame 401 klaidas (neautorizuotas vartotojas)
            if (response.status === 401) {
                AuthService.handleUnauthorized();
                return response;
            }
            
            return response;
        };

        // Inicializuojame event listenerius kai DOM užkraunamas
        document.addEventListener('DOMContentLoaded', () => this.initialize());
    }

    /**
     * Viešas metodas užduočių sąrašo užkrovimui
     * Naudojame Promise.catch() klaidų apdorojimui
     */
    public loadTasks(): void {
        this.outputHandler.handle().catch(error => {
            this.notificationService.show('Nepavyko įkelti užduočių.', 'error');
        });
    }

    /**
     * Privatus metodas pradinei inicializacijai
     * Prideda event listenerius prie DOM elementų
     */
    private initialize(): void {
        // Naudojame event delegation pattern'ą efektyviam event'ų valdymui
        const createButton = document.querySelector(".todo-form > button") as HTMLButtonElement;
        createButton.addEventListener("click", () => this.createTask());

        const tasksList = document.getElementById("todo-list") as HTMLDivElement;
        tasksList.addEventListener("click", (event) => this.handleDelete(event));
    }

    /**
     * Naujos užduoties sukūrimo metodas
     * Validuoja įvestį ir naudoja async/await asinchroniniam darbui
     */
    private async createTask(): Promise<void> {
        try {
            const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
            const taskTitle: string = taskElement.value;

            // Validuojame įvestį
            if (!taskTitle.trim()) {
                this.notificationService.show('Užduoties pavadinimas negali būti tuščias.', 'warning');
                return;
            }

            // Hardcoded vartotojo informacija (realiam projekte turėtų būti paimta iš autentifikacijos)
            const user = new User('Tautvydas');
            user.setId("1234");

            // Kuriame ir išsaugome naują užduotį
            const taskItem = new Task(taskTitle, user.getId());
            await this.taskManager.create(taskItem).then(() => this.outputHandler.handle());
            taskElement.value = '';
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            this.notificationService.show('Nepavyko sukurti užduoties.', 'error');
        }
    }

    /**
     * Užduoties ištrynimo metodas
     * Naudoja event delegation pattern'ą efektyviam event'ų valdymui
     */
    private async handleDelete(event: Event): Promise<void> {
        const target = event.target as HTMLElement;
        // Tikriname ar paspaustas ištrynimo mygtukas
        if (target && target.classList.contains('delete-button')) {
            const taskElement = target.closest('.task-item') as HTMLElement;
            if (taskElement) {
                const taskId = taskElement.dataset.taskId;
                if (taskId) {
                    try {
                        // Tikriname ar užduotis egzistuoja prieš ją trinant
                        const task = await this.taskManager.getById(taskId);
                        if (task) {
                            await this.taskManager.remove(task);
                            await this.outputHandler.handle();
                        } else {
                            this.notificationService.show('Užduotis nerasta.', 'error');
                        }
                    } catch (error) {
                        console.error('Nepavyko ištrinti užduoties:', error);
                        this.notificationService.show('Nepavyko ištrinti užduoties.', 'error');
                    }
                }
            }
        }
    }
}