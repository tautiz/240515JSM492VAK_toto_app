import BaseManager from "./BaseManager";
import IManager from "./IManager";
import {IModel} from "../Models/Interfaces/IModel";

export class UserManager extends BaseManager implements IManager {
    protected repository: any;

    constructor(repository: any) {
        super();
        this.repository = repository;
    }

    create(data: any): Promise<any> {
        return this.repository.create(data);
    }

    remove(model: IModel): void {
        return this.repository.remove(model.getId());
    }

    update(model: IModel): void {
        return this.repository.update(model.getId(), model);
    }

    getAll(): Promise<any[]> {
        return this.repository.getAll();
    }

    getById(id: string): Promise<any> {
        return this.repository.getById(id);
    }
}
