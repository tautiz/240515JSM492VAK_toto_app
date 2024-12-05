import { HttpClient } from './api/clients/HttpClient';
import { TaskApiService } from './api/services/TaskApiService';
import { TaskRepository } from './repositories/TaskRepository';
import { API_CONFIG } from './config/api.config';
import { AuthApiService } from './api/services/AuthApiService';
import { AuthService } from './Services/AuthService';

export function createContainer() {
    const httpClient = new HttpClient(API_CONFIG.baseUrl);
    const taskApiService = new TaskApiService(httpClient);
    const taskRepository = new TaskRepository(taskApiService);
    const authApiService = new AuthApiService(httpClient);

    // Initialize AuthService
    AuthService.initialize(authApiService);

    return {
        taskRepository,
        authApiService
    };
}
