import {BaseModel} from "./BaseModel";
import {User} from "./User";
import HasAuthor from "./Interfaces/HasAuthor";
import { IModel } from './Interfaces/IModel';

export class Task extends BaseModel implements HasAuthor, IModel {
    private author: string;

    constructor(title: string, userId: string) {
        super(title);
        this.author = userId;
    }

    setAuthor(user: User): void{
        this.author = user.getId();
    }

    getAuthor(): User {
        return new User(this.author); // TODO: Work in progress
    }
}