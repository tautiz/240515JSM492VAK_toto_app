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
import { Task } from "../Models/Task";
import { NotificationService } from "../Services/NotificationService";
import { AuthService } from "../Services/AuthService";
import { TodoItemView } from "./TodoItemView";
import '../css/notifications.css';
import { createContainer } from "../container";

export class TaskView {
    // Privačios klasės savybės užtikrina enkapsuliaciją
    private taskManager: TaskManager;
    private notificationService: NotificationService;

    constructor() {
        const container = createContainer();

        this.taskManager = new TaskManager(container.taskRepository);
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
    public getElement(): HTMLDivElement {
        let list = document.createElement('div');
        this.taskManager.getAll()
            .then(tasks => {
                tasks.forEach(task => {list.appendChild(new TodoItemView(this.taskManager).generateItemElement(task))});
            })
            .catch(error => {
                console.error('Nepavyko gauti užduočių sąrašo:', error);
            });

        return list;
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
            new TodoItemView(this.taskManager).generateItemElement(taskItem);
            
            // Išvalome input lauką
            taskElement.value = '';
            
            this.notificationService.show('Užduotis sėkmingai sukurta!', 'success');
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            this.notificationService.show('Nepavyko sukurti užduoties.', 'error');
        }
    }
}