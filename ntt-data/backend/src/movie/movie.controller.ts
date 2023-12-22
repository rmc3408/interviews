import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieInterceptor } from './interceptor/movie.interceptor';
import { TitlesMovieInterceptor } from './interceptor/titles.interceptor';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get('title/:id')
  @UseInterceptors(MovieInterceptor)
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Get('search/:id')
  @UseInterceptors(TitlesMovieInterceptor)
  getTitle(@Param('id') id: string) {
    return this.movieService.findAll(id);
  }
}
