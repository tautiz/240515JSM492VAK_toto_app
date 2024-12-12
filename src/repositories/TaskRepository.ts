import { Task } from "../Models/Task";
import { TaskDto, CreateTaskDto } from "../api/dto/TaskDto";
import { TaskApiService } from "../api/services/TaskApiService";
import { ITaskRepository } from "./interfaces/ITaskRepository";
import { ApiError } from "../api/errors/ApiError";

export class RepositoryError extends Error {
    constructor(message: string, public readonly cause: Error) {
        super(message);
    }
}

export class TaskRepository implements ITaskRepository {
    constructor(private taskApiService: TaskApiService) {}

    async create(task: Task): Promise<void> {
        try {
            const taskDto = this.mapToDto(task);
            const createdTask = await this.taskApiService.createTask(taskDto);
            if (createdTask._id) {
                task.setId(createdTask._id);
            }
        } catch (error) {
            if (error instanceof ApiError) {
                throw new RepositoryError('Nepavyko sukurti užduoties', error);
            }
            throw error;
        }
    }

    async remove(taskId: string): Promise<void> {
        try {
            await this.taskApiService.deleteTask(taskId);
        } catch (error) {
            if (error instanceof ApiError) {
                throw new RepositoryError('Nepavyko ištrinti užduoties', error);
            }
            throw error;
        }
    }

    async getAll(): Promise<Task[]> {
        try {
            let tasksDto = await this.taskApiService.getAllTasks();
            return tasksDto.map(dto => this.mapToTask(dto));
        } catch (error) {
            if (error instanceof ApiError) {
                throw new RepositoryError('Nepavyko gauti užduočių sąrašo', error);
            }
            throw error;
        }
    }

    async getById(id: string): Promise<Task | null> {
        try {
            const taskDto = await this.taskApiService.getTaskById(id);
            if (!taskDto) {
                return null;
            }
            return this.mapToTask(taskDto);
        } catch (error) {
            if (error instanceof ApiError) {
                throw new RepositoryError('Nepavyko gauti užduoties', error);
            }
            throw error;
        }
    }

    async update(task: Task): Promise<void> {
        try {
            const taskDto = this.mapToDto(task);
            await this.taskApiService.updateTask(task.getId(), taskDto);
        } catch (error) {
            if (error instanceof ApiError) {
                throw new RepositoryError('Nepavyko atnaujinti užduoties', error);
            }
            throw error;
        }
    }

    private mapToTask(dto: TaskDto): Task {
        const task = new Task(dto.title);
        if (dto._id) {
            task.setId(dto._id);
        }
        task.setStatus(dto.status);
        return task;
    }

    private mapToDto(task: Task): CreateTaskDto {
        return {
            title: task.getTitle(),
            status: task.getStatus()
        };
    }
}
