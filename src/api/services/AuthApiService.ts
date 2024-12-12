import { HttpClient } from '../clients/HttpClient';
import { LoginRequestDto, LoginResponseDto } from '../dto/AuthDto';

export class AuthApiService {
    private readonly endpoint = '/auth';

    constructor(private httpClient: HttpClient) {}

    async login(credentials: LoginRequestDto): Promise<LoginResponseDto> {        
        return this.httpClient.post<LoginResponseDto>(`${this.endpoint}/login`, credentials);
    }

    async logout(): Promise<void> {
        return this.httpClient.post(`${this.endpoint}/logout`, {});
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            await this.httpClient.post(`${this.endpoint}/validate`, { token });
            return true;
        } catch {
            return false;
        }
    }
}
