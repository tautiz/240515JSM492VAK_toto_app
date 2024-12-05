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
import { createContainer } from "../container";

export class TaskController {
    // Privačios klasės savybės užtikrina enkapsuliaciją
    private taskManager: TaskManager;
    private outputHandler: OutputHandler;
    private notificationService: NotificationService;
    private htmlWriter: HtmlWriter;

    constructor() {
        // Inicializuojame reikalingus servisus
        // Sukuriame container'į
        const container = createContainer();

        // Sukuriame TaskManager su repository
        this.taskManager = new TaskManager(container.taskRepository);
        this.htmlWriter = new HtmlWriter(this.taskManager);
        this.outputHandler = new OutputHandler(this.taskManager, this.htmlWriter);
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
            console.error('Klaida kraunant užduotis:', error);
            this.notificationService.show('Nepavyko įkelti užduočių.', 'error');
        });
    }

    /**
     * Privatus metodas pradinei inicializacijai
     * Prideda event listenerius prie DOM elementų
     */
    private initialize(): void {
        const form = document.querySelector(".todo-form") as HTMLFormElement;
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.createTask();
            });
        }
    }
    /**
     * Naujos užduoties sukūrimo metodas
     * Validuoja įvestį ir naudoja async/await asinchroniniam darbui
     */
    private async createTask(): Promise<void> {
        try {
            const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
            const taskTitle: string = taskElement.value.trim();

            if (!taskTitle) {
                this.notificationService.show('Užduoties pavadinimas negali būti tuščias.', 'warning');
                return;
            }

            // Kuriame ir išsaugome naują užduotį
            const taskItem = new Task(taskTitle);
            taskItem.setStatus('Active');
            
            // Išsaugome užduotį ir laukiame kol gausime atsakymą su ID
            await this.taskManager.create(taskItem);
            
            // Patikriname ar turime ID
            if (!taskItem.getId()) {
                throw new Error('Task was created but no ID was received');
            }
            
            console.log('Created task with ID:', taskItem.getId()); // Debug
            
            // Tiesiogiai pridedame naują užduotį į DOM TIK po to, kai turime ID
            await this.htmlWriter.write(taskItem);
            
            // Išvalome input lauką
            taskElement.value = '';
            
            this.notificationService.show('Užduotis sėkmingai sukurta!', 'success');
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            this.notificationService.show('Nepavyko sukurti užduoties.', 'error');
        }
    }
}