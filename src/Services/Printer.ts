import {IModel} from "../Models/Interfaces/IModel";
import IManager from "../Managers/IManager";
export class Printer {

    constructor(private manager: IManager, private writer: { 
        write: (item: IModel) => void,
        clear: () => void 
    }) {
    }

    async printAll(): Promise<void> {
        const models: IModel[] = await this.manager.getAll();
        this.writer.clear();
        models.forEach((model: IModel): void => {
            this.writer.write(model);
        });
    }
}
