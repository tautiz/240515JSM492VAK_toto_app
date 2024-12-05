import { AuthApiService } from '../api/services/AuthApiService';
import { LoginRequestDto } from '../api/dto/AuthDto';

export class AuthService {
    private static instance: AuthService;
    private token: string | null = null;
    private authApiService: AuthApiService;

    private constructor(authApiService: AuthApiService) {
        this.token = localStorage.getItem('auth_token');
        this.authApiService = authApiService;
    }

    public static initialize(authApiService: AuthApiService): void {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService(authApiService);
        }
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            throw new Error('AuthService must be initialized with initialize() before using getInstance()');
        }
        return AuthService.instance;
    }

    public static getToken(): string | null {
        return AuthService.getInstance().token;
    }

    public static handleUnauthorized(): void {
        AuthService.getInstance().logout();
        window.location.reload();
    }

    public async login(email: string, password: string): Promise<boolean> {
        try {
            const credentials: LoginRequestDto = { email, password };
            const response = await this.authApiService.login(credentials);
            
            this.token = response.token;
            localStorage.setItem('auth_token', this.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }

    public async logout(): Promise<void> {
        try {
            await this.authApiService.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            this.token = null;
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
        }
    }

    public async isAuthenticated(): Promise<boolean> {
        if (!this.token) {
            return false;
        }

        try {
            return await this.authApiService.validateToken(this.token);
        } catch {
            this.logout();
            return false;
        }
    }
}
