
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TitlesMovieDto } from '../dto/titles-movies.dto';


@Injectable()
export class TitlesMovieInterceptor implements NestInterceptor<TitlesMovieDto> {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<TitlesMovieDto[]> {
    return next
      .handle()
      .pipe(map(data => {
        let titles = []
        if(data) data.forEach(item => titles.push({ id: item.imdbID, title: item.Title }))
        return titles
      }));
  }
}