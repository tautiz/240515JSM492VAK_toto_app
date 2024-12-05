import { Task } from "../../Models/Task";

export interface ITaskRepository {
    getAll(): Promise<Task[]>;
    create(task: Task): Promise<void>;
    remove(taskId: string): Promise<void>;
    update(task: Task): Promise<void>;
    getById(id: string): Promise<Task | null>;
}
