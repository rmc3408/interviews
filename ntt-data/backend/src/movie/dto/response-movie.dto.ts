import { IsString, IsNumber } from 'class-validator';

export class ResponseMovieDto {
  @IsString()
  readonly Title: string;

  @IsString()
  readonly Plot: string;

  @IsString()
  readonly Actors: string;

  @IsNumber()
  readonly imdbRating: number;

  @IsString()
  readonly Poster: string;
}
