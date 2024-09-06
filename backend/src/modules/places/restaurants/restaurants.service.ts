import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { RapidProxy } from '../rapid.proxy';

@Injectable()
export class RestaurantService {
  private apiInstance: AxiosInstance;
  private restaurantUrl: string;

  constructor(
    private readonly axiosInstanceFactory: RapidProxy,
    private readonly configService: ConfigService
  ) {
    this.apiInstance = this.axiosInstanceFactory.getInstance();
    this.restaurantUrl = this.configService.get<string>('VITE_RESTAURANT_URL') || '';

    if (!this.restaurantUrl) {
      throw new Error('VITE_RESTAURANT_URL is not defined in the environment variables.');
    }
  }

  private restaurantOptions(locationId: string): { params: { location_id: string } } {
    return {
      params: { location_id: locationId },
    };
  }

  async getRestaurantData(locationId: string): Promise<any> {
    try {
      const { data: { data } } = await this.apiInstance.get(
        this.restaurantUrl,
        this.restaurantOptions(locationId)
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
