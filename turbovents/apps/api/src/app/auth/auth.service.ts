import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/user.entity';

export const JWT_SECRET = 'secret123';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string): Promise<User | null> {
    const userEntity = await this._userService.findOne(username);
    if (userEntity) {
      return userEntity;
    }
    return null;
  }

  async verifyToken(
    token: string
  ): Promise<{
    username: string;
    sub: string;
    iat: number;
    exp: number;
  }> {
    try {
      return this.jwtService.verifyAsync(token, {
        secret: JWT_SECRET,
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async register(payload: any): Promise<User> {
    // create JWT sign password
    const payloadJWT = { 
      username: payload.username, 
      sub: payload.password
    };
    const hashedPassword = await this.jwtService.signAsync(payloadJWT, {
      secret: JWT_SECRET,
    });
    // create user and register
    return await this._userService.register({
      ...payload,
      password: hashedPassword,
    });
  }

  async signIn(body: Record<string, string>): Promise<{ access_token: string }> {
    const { username, password } = body;
    let user = await this._userService.findOne(username);
    if (!user) {
      user = await this.register(body);
    }
    // if Existing user, check password
    const verifiedUser = await this.verifyToken(user.password);
    if (verifiedUser?.sub !== password) {
      throw new UnauthorizedException();
    }
    return {
      access_token: user.password,
    };
  }
}
