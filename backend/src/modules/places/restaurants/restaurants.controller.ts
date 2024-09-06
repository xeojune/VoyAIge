import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from './restaurants.service';

@Controller('attractions')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async getRestaurants(@Query('locationId') locationId: string): Promise<any> {
    return this.restaurantService.getRestaurantData(locationId);
  }
}
