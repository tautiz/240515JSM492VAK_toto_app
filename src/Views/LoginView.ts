import { AuthService } from '../Services/AuthService';

export class LoginView {
    private container: HTMLDivElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'login-container';
        this.render();
    }

    public getElement(): HTMLDivElement {
        return this.container;
    }

    private render(): void {
        console.log('🔄 Rendering login form...');
        this.container.innerHTML = `
            <form class="login-form" id="loginForm">
                <h2>Login</h2>
                <div class="error-message" style="display: none; color: red; margin-bottom: 10px;"></div>
                <input type="text" id="username" placeholder="Username" required autocomplete>
                <input type="password" id="password" placeholder="Password" required autocomplete>
                <button type="submit">Login</button>
            </form>
        `;

        const form = this.container.querySelector('#loginForm');
        if (form) {
            console.log('📝 Form found, attaching submit handler...');
            form.addEventListener('submit', (event: Event) => {
                console.log('🚀 Form submission triggered');
                this.handleSubmit(event);
            });
        } else {
            console.error('❌ Login form not found in DOM!');
        }
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
        console.log('🎯 handleSubmit called');
        event.preventDefault();
        console.log('🛑 Default form submission prevented');
        this.hideError();

        const form = event.target as HTMLFormElement;
        const username = (form.querySelector('#username') as HTMLInputElement).value;
        const password = (form.querySelector('#password') as HTMLInputElement).value;

        try {
            console.log('1');
            
            const authService = AuthService.getInstance();
            console.log('2');
            if (await authService.login(username, password)) {
            } else {
                this.showError('Neteisingas prisijungimo vardas arba slaptažodis');
            }
        } catch (error) {
            this.showError('Įvyko klaida bandant prisijungti. Bandykite dar kartą.');
            console.error('Login error:', error);
        }
    }
}
