import {IManager} from "./IManager";
import {IModel} from "../Models/IModel";

export class BaseManager implements IManager {
    private tasks: IModel[] = [];
    add(model: IModel) {
        this.tasks.push(model);
    }

    remove(id: string): void {
        const index = this.tasks.findIndex((task: IModel) => task.getId() === id);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    update(model: IModel): void {
        const index = this.tasks.findIndex(
            (task: IModel) => task.getId() === model.getId()
        );
        if (index > -1) {
            this.tasks[index] = model;
        }
    }

    complete(model: IModel): void {
        model.setStatus("completed");
    }

    getAll(): IModel[] {
        return this.tasks;
    }

    getById(id: string): IModel | null {
        const index = this.tasks.findIndex((task: IModel) => task.getId() === id);
        if (index > -1) {
            return this.tasks[index];
        }
        return null;
    }
}
