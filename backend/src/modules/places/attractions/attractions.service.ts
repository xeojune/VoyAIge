import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { RapidProxy } from '../rapid.proxy';

@Injectable()
export class AttractionService {
  private apiInstance: AxiosInstance;
  private attractionUrl: string;

  constructor(
    private readonly axiosInstanceFactory: RapidProxy,
    private readonly configService: ConfigService
  ) {
    this.apiInstance = this.axiosInstanceFactory.getInstance();
    this.attractionUrl = this.configService.get<string>('VITE_ATTRACTION_URL') || '';

    if (!this.attractionUrl) {
      throw new Error('VITE_ATTRACTION_URL is not defined in the environment variables.');
    }
  }

  private attractionOptions(locationId: string): { params: { location_id: string; sort?: string } } {
    return {
      params: {
        location_id: locationId,
        sort: 'recommended',
      },
    };
  }

  async getAttractionData(locationId: string): Promise<any> {
    try {
      const { data: { data } } = await this.apiInstance.get(
        this.attractionUrl,
        this.attractionOptions(locationId)
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
