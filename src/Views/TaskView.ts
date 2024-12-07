import { IModel } from "../Models/Interfaces/IModel";
import IWriter from "../Services/Writers/IWriter";

export class TaskView {
    private writer: IWriter;

    constructor(writer: IWriter) {
        this.writer = writer;
    }

    renderTasks(models: IModel[]): void {
        this.writer.clear();
        models.forEach((model: IModel) => {
            this.writer.write(model);
        });
    }

    showError(message: string): void {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = `Klaida: ${message}`;
        const errorsContainer = document.querySelector('.errors');
        if (errorsContainer) {
            errorsContainer.prepend(errorElement);
        } else {
            document.body.prepend(errorElement);
        }

        // Ištrinam klaidą po 5 sekundžių
        setTimeout(() => {
            errorElement.remove();
        }, 5000);
    }
}