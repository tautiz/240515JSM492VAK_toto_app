import {IModel} from "./IModel";

export class BaseModel implements IModel {
    private id: string;
    private status: string;
    private date: Date;

    constructor(private title: string) {
        this.id = crypto.randomUUID();
        this.status = 'created';
        this.date = new Date();
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
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
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