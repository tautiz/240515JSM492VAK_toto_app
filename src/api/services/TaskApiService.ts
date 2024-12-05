import { HttpClient } from '../clients/HttpClient';
import { TaskDto, CreateTaskDto } from '../dto/TaskDto';

export class TaskApiService {
    private readonly endpoint = '/todo';

    constructor(private httpClient: HttpClient) {}

    async getAllTasks(): Promise<TaskDto[]> {
        return this.httpClient.get<TaskDto[]>(this.endpoint);
    }

    async createTask(taskData: CreateTaskDto): Promise<TaskDto> {
        return this.httpClient.post<TaskDto>(this.endpoint, taskData);
    }

    async deleteTask(taskId: string): Promise<void> {
        return this.httpClient.delete(`${this.endpoint}/${taskId}`);
    }

    async updateTask(taskId: string, taskData: CreateTaskDto): Promise<TaskDto> {
        return this.httpClient.put<TaskDto>(`${this.endpoint}/${taskId}`, taskData);
    }

    async getTaskById(taskId: string): Promise<TaskDto> {
        return this.httpClient.get<TaskDto>(`${this.endpoint}/${taskId}`);
    }
}
