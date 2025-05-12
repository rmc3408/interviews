import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): Array<{ message: string }> {
    return [{ message: 'Hello turbovents' }];
  }
}
