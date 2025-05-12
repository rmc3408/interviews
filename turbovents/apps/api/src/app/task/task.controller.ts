import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { Task } from '../entity/task.entity';
import { TaskService } from './task.service';
import { UserService } from '../user/user.service';
import { UserRoleEnumType } from '../entity/role.entity';
import { RolesGuard, Roles } from '../guards/roles.guard';
import { AuthGuard } from '../guards/auth.guard';
import { LoggingInterceptor } from '../middleware/logger.middleware';

@Controller('tasks')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class TaskController {
  constructor(
    private _taskService: TaskService,
    private _userService: UserService
  ) {}

  @Get()
  // @Roles(UserRoleEnumType.OWNER)
  findAll(): Promise<Task[]> {
    return this._taskService.findAll();
  }

  @Get(':userId')
  @UseGuards(RolesGuard)
  @Roles(UserRoleEnumType.ADMIN, UserRoleEnumType.VIEWER)
  findOne(@Param('userId') id: string, @Request() req): Promise<Task[] | null> {
    console.log('CONTROLLER TASK - METHOD GET ONE TASK BY USER ID', req.user);
    return this._taskService.findOne(id);
  }

  @Post()
  async create(
    @Body() body: { userId: string; title: string; description: string }
  ) {
    const userEntity = await this._userService.findOne(body.userId);
    if (!userEntity) {
      throw new Error('User not found or Error creating user');
    }
    return this._taskService.create(body, userEntity);
  }

  @Put(':id')
  update(@Param('id') id, @Body('content') content) {
    if (!content) {
      throw new HttpException('Missing content', HttpStatus.BAD_REQUEST);
    }
    return this._taskService.update(id, content);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    if (!id) {
      throw new HttpException(
        'Could not delete existing Task',
        HttpStatus.BAD_REQUEST
      );
    }
    return this._taskService.remove(id);
  }
}
