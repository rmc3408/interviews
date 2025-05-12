import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET ('/api');
  // localhost:3000/api
  @Get()
  root() {
    return this.appService.root();
  }
}
