import { Injectable } from '@nestjs/common';
import { RapidProxy } from '../rapid.proxy';
import { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LocationService {
  private apiInstance: AxiosInstance;
  private locationUrl: string;

  constructor(
    private readonly rapidProxy: RapidProxy,
    private readonly configService: ConfigService
  ) {
    this.apiInstance = this.rapidProxy.getInstance();
    this.locationUrl = this.configService.get<string>('VITE_LOCATION_URL') || '';

    if (!this.locationUrl) {
      throw new Error('VITE_LOCATION_URL is not defined in the environment variables.');
    }
  }

  private options(query: string): { params: { query: string } } {
    return {
      params: { query },
    };
  }

  async getLocationData(query: string): Promise<any> {
    try {
      const { data: { data } } = await this.apiInstance.get(
        this.locationUrl,
        this.options(query)
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
