export interface IModel {
    getTitle(): string;
    getStatus(): string;
    getDate(): Date;
    getId(): string;
    setTitle(title: string): void;
    setStatus(status: string): void;
    setDate(date: Date): void;
}