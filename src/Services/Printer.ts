import {IManager} from "../Managers/IManager";
import {IModel} from "../Models/IModel";

export class Printer {

    constructor(private manager: IManager,private writerFunction: (item: IModel) => void) {
    }

    printAll(): void {
        const models: IModel[] = this.manager.getAll();
        models.forEach((model: IModel): void => {
            this.writerFunction(model);
        });
    }
}
