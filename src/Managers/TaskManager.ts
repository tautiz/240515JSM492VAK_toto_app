import {Task} from "../Models/Task";
import {User} from "../Models/User";
import BaseManager from "../Managers/BaseManager";
import IManager from "../Managers/IManager";

export class TaskManager extends BaseManager implements IManager {
    async getAll(): Promise<Task[]> {
        try {
            const response = await fetch('http://localhost:3000/todo');
            if (!response.ok) {
                throw new Error('Nepavyko gauti užduočių sąrašo');
            }
            const modelsJson = await response.json();
            
            return modelsJson.map((taskData: any): Task => {
                const taskItem = new Task(taskData.title, taskData.author);
                taskItem.setId(taskData._id);
                return taskItem;
            });
        } catch (error) {
            console.error('Klaida gaunant užduotis:', error);
            throw error;
        }
    }

    async create(task: Task): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: task.getTitle(),
                    author: task.getAuthor().getId()
                })
            });

            if (!response.ok) {
                throw new Error('Nepavyko sukurti užduoties');
            }

            const result = await response.json();
            task.setId(result._id);
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            throw error;
        }
    }

    async remove(task: Task): Promise<void> {
        try {
            const response = await fetch(`http://localhost:3000/todo/${task.getId()}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Nepavyko ištrinti užduoties');
            }
        } catch (error) {
            console.error('Nepavyko ištrinti užduoties:', error);
            throw error;
        }
    }

    async update(task: Task): Promise<void> {
        try {
            const response = await fetch(`http://localhost:3000/todo/${task.getId()}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: task.getTitle(),
                    author: task.getAuthor().getId()
                })
            });

            if (!response.ok) {
                throw new Error('Nepavyko atnaujinti užduoties');
            }
        } catch (error) {
            console.error('Nepavyko atnaujinti užduoties:', error);
            throw error;
        }
    }

    async getById(id: string): Promise<Task | null> {
        try {
            const response = await fetch(`http://localhost:3000/todo/${id}`);
            if (!response.ok) {
                throw new Error('Nepavyko rasti užduoties');
            }
            
            const taskData = await response.json();
            const task = new Task(taskData.title, taskData.author);
            task.setId(taskData._id);
            return task;
        } catch (error) {
            console.error('Klaida gaunant užduotį:', error);
            return null;
        }
    }
}
