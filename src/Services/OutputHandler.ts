import {IModel} from "../Models/Interfaces/IModel";
import IManager from "../Managers/IManager";
import IWriter from "./Writers/IWriter";
export class OutputHandler {

    constructor(private manager: IManager, private writer: IWriter) {}

    async handle(): Promise<void> {
        // get all models from manager
        const models: IModel[] = await this.manager.getAll();
        // clear the data in the writer
        this.writer.clear();
        // write each model to the writer
        models.forEach((model: IModel): void => {
            this.writer.write(model);
        });
    }
}
