import {Task} from "../Models/Task";
import {User} from "../Models/User";
import BaseManager from "../Managers/BaseManager";
import IManager from "../Managers/IManager";

export class TaskManager extends BaseManager implements IManager {
    async getAll(): Promise<Task[]> {
        let tasks: Task[] = [];
        const response = await fetch('http://localhost:3000/todo');
        const modelsJson = await response.json();

        modelsJson.forEach((taskData: any): void => {
            const taskItem = new Task(taskData.title, taskData.description);
            taskItem.setId(taskData._id);
            tasks.push(taskItem);
        });
        
        return tasks;
    }

    async create(task: Task): Promise<void> {
        // TODO: Work in progress, get logged In user
        const user = new User('Tautvydas');
        user.setId("1234");
        // TODO: End of get logged In user

        task.setAuthor(user);

        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
    }

    async remove(task: Task): Promise<void> {
        await fetch(`http://localhost:3000/todo/${task.getId()}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async update(model: Task): Promise<void> {
        await fetch(`http://localhost:3000/todo/${model.getId()}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        });
    }

    async getById(id: string): Promise<Task | null> {
        let result: Task | null = null;
        await fetch(`http://localhost:3000/todo/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    result = new Task(data.title, data.description);
                }
            });
        return result;
    }
}
