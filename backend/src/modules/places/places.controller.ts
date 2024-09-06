import { Controller, Get, Query, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async getPlaces(@Query('query') query: string): Promise<any> {
    throw new HttpException('Custom error message', HttpStatus.BAD_REQUEST);
    this.logger.log("Hello Log");
    this.logger.error("Hello Error");
    this.logger.debug("Hello Debug");
    return this.placesService.getPlacesData(query);
  }
}
