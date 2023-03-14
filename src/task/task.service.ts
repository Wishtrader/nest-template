import {Body, Injectable, Param} from "@nestjs/common";
import {ITask, Status} from "./task.interface";
import {Task} from "./task.entity";

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find((t) => t.id === +id);
  }

  createTask(task: string, tags: string[]): ITask {
    const newTask = new Task(task, tags);
    this.tasks.push(newTask);
    return newTask;
  }
}
