import {IModel} from "./Interfaces/IModel";

export class BaseModel implements IModel {
    private _id: string = '';
    private status: string;
    private date: Date;

    constructor(private title: string) {
        this.status = 'created';
        this.date = new Date('1970-01-01T00:00:00.000Z');
    }

    getTitle(): string {
        return this.title;
    }

    getStatus(): string {
        return this.status;
    }

    getDate(): Date {
        return this.date;
    }

    getId(): string {
        return this._id;
    }

    setId(id: string): void {
        this._id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    setDate(date: Date): void {
        this.date = date;
    }
}