import {
  Body,
  Param,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { AuthGuard } from '../guards/auth.guard';
// import { IsPublic } from '../decorators/isPublic.decorator';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}

  @Post('register')
  async register(
    @Body() body: { username; password; organization; role }
  ): Promise<User | null> {
    const { username, password } = body;
    if (!username || !password) {
      throw new HttpException(
        'Username and/or password are required',
        HttpStatus.BAD_REQUEST
      );
    }

    try {
      const exist = await this._userService.findOne(username);
      if (exist) {
        throw new Error(`${username} already exists`);
      }
    } catch (e) {
      throw new HttpException(
        `Error Message is ${e.message}`,
        HttpStatus.BAD_REQUEST
      );
    }

    const newUser = await this._userService.register(body);
    if (!newUser) {
      throw new HttpException(
        'User not created',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return newUser;
  }

  @Get('list')
  //@IsPublic()
  @UseGuards(AuthGuard)
  findAll(@Request() req): Promise<User[]> {
    try {
      console.log('Inside method - USER LIST ', req.user);
      return this._userService.findAll();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('one/:username')
  async findOne(@Param('username') username: string): Promise<User> {
    try {
      return this._userService.findOne(username);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
