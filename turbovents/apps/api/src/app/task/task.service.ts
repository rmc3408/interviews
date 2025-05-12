import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from '../entity/user.entity';
import { Task } from '../entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private _taskRepository: Repository<Task>
  ) {}

  findAll(): Promise<Task[]> {
    return this._taskRepository.find();
  }
  
  findOne(userId: string): Promise<Task[]> {
    return this._taskRepository.find({
      where: { user: { username: userId } },
      relations: {
        user: true,
      },
    });
  }

  // Create new task for existing user
  async create(
    body: {
      userId: string;
      title: string | null;
      description: string | null;
    },
    user: User
  ): Promise<Task> {
    const todoList = new Task();
    todoList.title = body.title;
    todoList.description = body.description;
    todoList.user = user;
    return this._taskRepository.save(todoList);
  }

  update(id: string, content: string): Promise<UpdateResult> {
    return this._taskRepository.update(id, { description: content });
  }

  remove(id: string): void {
    this._taskRepository.delete(id);
  }

}
