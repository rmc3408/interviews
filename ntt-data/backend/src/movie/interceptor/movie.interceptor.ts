
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseMovieDto } from '../dto/response-movie.dto';


@Injectable()
export class MovieInterceptor implements NestInterceptor<ResponseMovieDto> {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<ResponseMovieDto> {
    return next
      .handle()
      .pipe(map(data => {
        const transformedMovie: ResponseMovieDto  = {
          Title: data.Title,
          Plot: data.Plot,
          Actors: data.Actors,
          imdbRating: data.imdbRating / 2,
          Poster: data.Poster
        }
        return transformedMovie
      }));
  }
}