import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ITask} from "./task.interface";
import {TaskService} from "./task.service";

@Controller('task')
export class TaskController {
  constructor(private appService: TaskService) {
  }

  @Get()
  getTasks(): ITask[] {
    return this.appService.getTasks();
  }

  @Get(':id')
    getTaskById(@Param('id') id: string): ITask {
      return this.appService.getTaskById(id);
  }

  @Post()
  createTask(@Body() {task, tags}: any): ITask {
    return this.appService.createTask(task, tags);
  };
}
