import { Controller, Get, Query } from '@nestjs/common';
import { AttractionService } from './attractions.service';

@Controller('attractions')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @Get()
  async getAttractions(@Query('locationId') locationId: string): Promise<any> {
    return this.attractionService.getAttractionData(locationId);
  }
}
