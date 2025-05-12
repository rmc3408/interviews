import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthModule } from './jwt.module';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../entity/role.entity';
import { User } from '../entity/user.entity';
import { Organization } from '../entity/organization.entity';
import { Task } from '../entity/task.entity';

@Module({
  imports: [
    UserModule,
    JwtAuthModule,
    TypeOrmModule.forFeature([User, Task, Role, Organization])
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
