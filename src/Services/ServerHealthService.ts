export class ServerHealthService {
    private static instance: ServerHealthService;
    private isOnline: boolean = true;
    private checkCallback?: () => void;

    private constructor() {
        this.startHealthCheck();
    }

    public static getInstance(): ServerHealthService {
        if (!ServerHealthService.instance) {
            ServerHealthService.instance = new ServerHealthService();
        }
        return ServerHealthService.instance;
    }

    public startChecking(callback: () => void): void {
        this.checkCallback = callback;
        this.checkServerHealth();
    }

    private startHealthCheck(): void {
        setInterval(() => {
            this.checkServerHealth();
        }, 30000); // Check every 30 seconds
    }

    private async checkServerHealth(): Promise<void> {
        try {
            // Simulate API health check
            // In a real application, this would be an actual API call
            await new Promise(resolve => setTimeout(resolve, 500));
            this.isOnline = true;
            if (this.checkCallback) {
                this.checkCallback();
            }
        } catch (error) {
            console.error('Server health check failed:', error);
            this.isOnline = false;
        }
    }

    public getServerStatus(): boolean {
        return this.isOnline;
    }
}
