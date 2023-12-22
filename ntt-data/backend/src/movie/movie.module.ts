import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [HttpModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
