import {
  Controller,
  Post,
  Res,
  Body,
  HttpException,
  HttpStatus,
  HttpCode,
  Request,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
// import { IsPublic } from './isPublic.decorator';
// import { IsPrivate } from './isPrivate.decorator';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Get('profile')
  @UseGuards(AuthGuard)
  _getProfile(@Request() req) {
    return req.user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('check')
  async _create(@Body() body) {
    try {
      const exist = await this._authService.validateUser(body.username);
      if (!exist) {
        throw new Error('User not found');
      }
      return exist;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async _signIn(
    @Body() body: Record<string, string>,
    @Res({ passthrough: true }) response: Response
  ) {
    const jwt = await this._authService.signIn(body);
    this._storeCookieToken(jwt, response);
    return {
      message: 'User signed in',
      access_token: jwt.access_token,
    };
  }

  private _storeCookieToken(jwtObject: any, response: Response): void {
    const { access_token } = jwtObject;
    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
    });
  }
}
