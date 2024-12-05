import { AuthService } from '../Services/AuthService';

export class LoginView {
    private container: HTMLDivElement;
    private onLoginSuccess: () => void;

    constructor(onLoginSuccess: () => void) {
        this.container = document.createElement('div');
        this.container.className = 'login-container';
        this.onLoginSuccess = onLoginSuccess;
        this.render();
    }

    public getElement(): HTMLDivElement {
        return this.container;
    }

    private render(): void {
        this.container.innerHTML = `
            <form class="login-form">
                <h2>Login</h2>
                <div class="error-message" style="display: none; color: red; margin-bottom: 10px;"></div>
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        `;

        const form = this.container.querySelector('form');
        form?.addEventListener('submit', this.handleSubmit.bind(this));
    }

    private showError(message: string): void {
        const errorDiv = this.container.querySelector('.error-message') as HTMLDivElement;
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    private hideError(): void {
        const errorDiv = this.container.querySelector('.error-message') as HTMLDivElement;
        errorDiv.style.display = 'none';
    }

    private async handleSubmit(event: Event): Promise<void> {
        event.preventDefault();
        this.hideError();

        const form = event.target as HTMLFormElement;
        const username = (form.querySelector('#username') as HTMLInputElement).value;
        const password = (form.querySelector('#password') as HTMLInputElement).value;

        try {
            const authService = AuthService.getInstance();
            if (await authService.login(username, password)) {
                this.onLoginSuccess();
            } else {
                this.showError('Neteisingas prisijungimo vardas arba slaptažodis');
            }
        } catch (error) {
            this.showError('Įvyko klaida bandant prisijungti. Bandykite dar kartą.');
            console.error('Login error:', error);
        }
    }
}
