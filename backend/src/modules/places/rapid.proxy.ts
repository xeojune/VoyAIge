import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';

//메모리에 axios instance를 저장해두고, 미리 생성된 axios instance 객체를 반환 (매번 객체 생성 안해도 됨)
@Injectable()
export class RapidProxy {
  private readonly BASE_URL = this.configService.get<string>('VITE_BASE_URL');
  private readonly API_KEY = this.configService.get<string>('VITE_RAPID_API_KEY');
  private readonly API_HOST = this.configService.get<string>('VITE_RAPID_API_HOST');

  //instance를 담는 통
  private readonly instance: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        'x-rapidapi-key': this.API_KEY,
        'x-rapidapi-host': this.API_HOST,
      },
    });
  }
  //instance를 불러오는 방법
  getInstance(): AxiosInstance {
    return this.instance;
  }
}
