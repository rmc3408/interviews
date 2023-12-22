import { Injectable } from '@nestjs/common';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Movie } from './entity/movie.entity';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MovieService {
  private baseURL = this.configService.get<string>('BASE_URL') || process.env.BASE_URL
  
  constructor(private readonly httpService: HttpService, private configService: ConfigService) {
    this.baseURL = this.baseURL + this.configService.get<string>('OMDB_KEY') || process.env.OMDB_KEY
  }

  async findOne(title: string): Promise<Observable<AxiosResponse<Movie>>> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseURL}&t=${title}`)
    )
    return data;
  }

  async findAll(title: string): Promise<Observable<AxiosResponse<Movie[]>>> {
    const { data } = await lastValueFrom(
      this.httpService.get(`${this.baseURL}&s=${encodeURI(title)}`)
    )
    return data.Search
  }
}
