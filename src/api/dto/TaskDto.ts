export interface TaskDto {
    _id?: string;
    title: string;
    status: string;
}

export interface CreateTaskDto {
    title: string;
    status: string;
}
