import { Injectable } from '@nestjs/common';
import { LocationService } from './locations/locations.service';
import { RestaurantService } from './restaurants/restaurants.service';
import { AttractionService } from './attractions/attractions.service';

@Injectable()
export class PlacesService {
  constructor(
    private readonly locationService: LocationService,
    private readonly restaurantService: RestaurantService,
    private readonly attractionService: AttractionService
  ) {}

  async getPlacesData(query: string): Promise<any> {
    try {
      const locationData = await this.locationService.getLocationData(query);

      if (locationData.length > 0) {
        const locationId = locationData[0].result_object.location_id;
        const latitude = locationData[0].result_object.latitude;
        const longitude = locationData[0].result_object.longitude;

        const restaurantData = await this.restaurantService.getRestaurantData(locationId);
        const attractionData = await this.attractionService.getAttractionData(locationId);

        return {
          latitude,
          longitude,
          restaurants: restaurantData,
          attractions: attractionData,
        };
      } else {
        console.log('No location data found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching places data:', error);
      throw error;
    }
  }
}
