import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from '../user/user.service';
import { JWT_SECRET } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector, private _userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('AUTH GUARD RUNNING');
    
    // Check if the Route is public and avoid this guard
    // If the route is public, we don't need to check for authentication
    const hasPublicGuard = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (hasPublicGuard) {
      return true;
    }

    // Check if the request has a valid JWT token
    // If the request does not have a token, throw an UnauthorizedException
    // If the request has a token, verify it and extract the user information
    const request: Request = context.switchToHttp().getRequest();
    const token = request.cookies['access_token'];
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: JWT_SECRET,
      });
      const user = await this._userService.findOne(payload.username);
      request['user'] = user;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
