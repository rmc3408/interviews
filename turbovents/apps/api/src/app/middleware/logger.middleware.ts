import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { catchError, map, Observable, tap } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../entity/user.entity';
import { Request } from 'express';

type UserRequest = Request & { user: User };

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly _userService: UserService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<unknown>> {
    console.log('INTECEPTORS RUNNING');

    // Handle the request
    const request: UserRequest = context.switchToHttp().getRequest();
    

    // Hanldle the response
    return next.handle().pipe(
      // MAP Runs with a value and once
      map((data) => this.transformData(data)),
      //TAP Runs without returning a value and once
      tap((data) => console.log('TAG INTERCEPTOR - Final formatted data')),
      // Handle errors
      catchError((_error) => {
        console.log('Shit happens');
        return null;
      })
    );

  }

  private transformData(pre: any) {
    
    pre = pre[0];
    const pos = {
      title: pre.title,
      content: pre.description,
      userId: pre.user.username
    }
    return [pos];
  }
}
