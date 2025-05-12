import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entity/task.entity';
import { User } from '../entity/user.entity';
import { Role } from '../entity/role.entity';
import { Organization } from '../entity/organization.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Task, Role, Organization])],
  providers: [UserService, TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
