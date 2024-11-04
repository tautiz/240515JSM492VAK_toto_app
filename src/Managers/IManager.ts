import {IModel} from "../Models/Interfaces/IModel";

export default interface IManager {
    create(model: IModel): void;
    remove(model: IModel): void;
    update(model: IModel): void;
    getAll(): Promise<IModel[]>;
    getById(id: string): Promise<IModel | null>;
}