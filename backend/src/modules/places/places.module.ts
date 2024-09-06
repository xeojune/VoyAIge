import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RestaurantService } from './restaurants/restaurants.service';
import { RapidProxy } from './rapid.proxy';
import { AttractionService } from './attractions/attractions.service';

import { PlacesController } from './places.controller';
import { LocationService } from './locations/locations.service';
import { PlacesService } from './places.service';

@Module({
  imports: [ConfigModule],
  providers: [
    RestaurantService,
    LocationService,
    PlacesService,
    AttractionService, 
    RapidProxy
  ],
  controllers: [PlacesController],  // Export if other modules might need it
})
export class PlacesModule {}
