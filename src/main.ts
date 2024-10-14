interface IModel {
  getTitle(): string;
  getStatus(): string;
  getDate(): Date;
  getId(): string;
  setTitle(title: string): void;
  setStatus(status: string): void;
  setDate(date: Date): void;
  setId(id: string): void;
}

interface IManager {
  add(model: IModel): void;
  remove(id: string): void;
  update(model: IModel): void;
  getAll(): IModel[];
  getById(id: string): IModel|null;
}

class Task implements IModel {
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

class TaskManager implements IManager {
  private tasks: Task[] = [];
  add(model: Task) {
    this.tasks.push(model);
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((task: Task) => task.getId() === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  update(model: Task): void {
    const index = this.tasks.findIndex(
      (task: Task) => task.getId() === model.getId()
    );
    if (index > -1) {
      this.tasks[index] = model;
    }
  }

  complete(model: Task): void {
    model.setStatus("completed");
  }

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: string): Task | null {
    const index = this.tasks.findIndex((task: Task) => task.getId() === id);
    if (index > -1) {
      return this.tasks[index];
    }
    return null;
  }
}

// -------------------------------------------------------------------
class Printer {

  constructor(private manager: IManager,private printer: (item: IModel) => void) {
  }

  printAll(): void {
    const models: IModel[] = this.manager.getAll();
    models.forEach((model: IModel): void => {
      this.printer(model);
    });
  }
}

const taskManager = new TaskManager();

let consolePrinter = console.log;
let htmlPrinter = (item: IModel): void => {
    const listElement = document.getElementById("tasksList") as HTMLUListElement;
    const listItem: HTMLLIElement = document.createElement("li");
    listItem.textContent = item.getTitle();
    listElement.appendChild(listItem);
}

const taskPrinter: Printer = new Printer(taskManager, htmlPrinter);
// -------------------------------------------------------------------

function createTask(): void {
  const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
  const taskTitle: string = taskElement.value;
  const taskItem = new Task (taskTitle);
  taskManager.add(taskItem);
  taskPrinter.printAll()
}

const createButton = document.getElementById("createButton") as HTMLButtonElement;
createButton.addEventListener("click", createTask);











