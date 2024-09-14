import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './locations.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async getLocations(@Query('query') query: string): Promise<any> {
    return this.locationService.getLocationData(query);
  }
}
