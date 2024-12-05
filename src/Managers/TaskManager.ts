import {Task} from "../Models/Task";
import BaseManager from "../Managers/BaseManager";
import IManager from "../Managers/IManager";
import {ITaskRepository} from "../repositories/interfaces/ITaskRepository";

export class TaskManager extends BaseManager implements IManager {
    constructor(private taskRepository: ITaskRepository) {
        super();
    }

    async getAll(): Promise<Task[]> {
        try {
            return await this.taskRepository.getAll();
        } catch (error) {
            console.error('Klaida gaunant užduotis:', error);
            throw error;
        }
    }

    async create(task: Task): Promise<void> {
        try {
            console.log('TaskManager: Creating task...'); // Debug
            await this.taskRepository.create(task);
            console.log('TaskManager: Task created with ID:', task.getId()); // Debug
        } catch (error) {
            console.error('Nepavyko sukurti užduoties:', error);
            throw error;
        }
    }

    async remove(task: Task): Promise<void> {
        try {
            const taskId = task.getId();
            if (!taskId) {
                throw new Error('Task ID is required for deletion');
            }
            console.log('TaskManager: Removing task with ID:', taskId); // Debug
            await this.taskRepository.remove(taskId);
            console.log('TaskManager: Task removed successfully'); // Debug
        } catch (error) {
            console.error('Nepavyko ištrinti užduoties:', error);
            throw error;
        }
    }

    async update(task: Task): Promise<void> {
        try {
            await this.taskRepository.update(task);
        } catch (error) {
            console.error('Nepavyko atnaujinti užduoties:', error);
            throw error;
        }
    }

    async getById(id: string): Promise<Task | null> {
        try {
            return await this.taskRepository.getById(id);
        } catch (error) {
            console.error('Nepavyko gauti užduoties:', error);
            throw error;
        }
    }
}
