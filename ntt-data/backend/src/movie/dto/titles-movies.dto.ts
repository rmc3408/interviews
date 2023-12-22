import { IsString } from 'class-validator';

export class TitlesMovieDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly title: string;
}