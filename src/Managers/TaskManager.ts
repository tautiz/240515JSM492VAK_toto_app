import {BaseManager} from "./BaseManager";
import {Task} from "../Models/Task";
import {User} from "../Models/User";

export class TaskManager extends BaseManager {
    createTask(taskModel: Task): void {
        // TODO: Work in progress, get logged In user
        const user = new User('Tautvydas');
        user.setId("1234");
        // TODO: End of get logged In user

        taskModel.setAuthor(user);

        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskModel)
        });
    }
}
