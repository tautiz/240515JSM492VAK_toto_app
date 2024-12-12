import { Task } from "../Models/Task";
import { IModel } from "../Models/Interfaces/IModel";
import IManager from "../Managers/IManager";

export class TodoItemView {
    
    constructor(private manager: IManager) {}

    private async handleDelete(taskId: string, todoItem: HTMLElement): Promise<void> {
        console.log('Trying to delete task with ID:', taskId); // Debug
        
        if (!taskId) {
            console.error('No task ID provided for deletion');
            return;
        }

        try {
            // Sukuriame Task objektą su reikiamu ID
            const task = new Task("");
            task.setId(taskId);

            console.log('Calling manager.remove with task:', task); // Debug
            
            // Triname užduotį
            await this.manager.remove(task);
            
            // Pašaliname elementą iš DOM
            todoItem.remove();
            console.log('Task successfully deleted'); // Debug
        } catch (error) {
            console.error('Klaida trinant užduotį:', error);
            alert('Nepavyko ištrinti užduoties. Bandykite dar kartą.');
        }
    }

    public generateItemElement(model: IModel): HTMLElement {
        const task = model as Task;

        console.log('Creating task element for task:', task); // Debug

        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        // Užduoties pavadinimo dalis
        const titleCheckbox = document.createElement('input');
        titleCheckbox.type = 'checkbox';
        titleCheckbox.className = 'todo-checkbox';
        titleCheckbox.id = `task_${task.getId()}`;

        const titleLabel = document.createElement('label');
        titleLabel.className = 'todo-label';
        titleLabel.htmlFor = `task_${task.getId()}`;
        titleLabel.textContent = task.getTitle();

        // Trynimo mygtukas
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-label';
        deleteButton.dataset.id = task.getId() || '';
        deleteButton.textContent = '×';
        deleteButton.type = 'button';
        
        // Pridedame click event listener tiesiai ant mygtuko
        const taskId = task.getId() || '';
        console.log('Setting up delete button with task ID:', taskId); // Debug
        
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Delete button clicked for task ID:', taskId); // Debug
            this.handleDelete(taskId, todoItem);
        });

        // Sudedame elementus
        todoItem.appendChild(titleCheckbox);
        todoItem.appendChild(titleLabel);
        todoItem.appendChild(deleteButton);

        return todoItem;
    }
    
    clear(): void {
        const taskList = document.querySelector('.todo-list');
        if (taskList) {
            taskList.innerHTML = '';
        }
    }
}