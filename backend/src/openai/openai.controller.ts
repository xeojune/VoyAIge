import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai') // Base route for OpenAI-related endpoints
export class OpenAIController {
  constructor(private readonly openAiService: OpenAIService) {}

  /**
   * POST /openai/generate-response
   * Endpoint to send a prompt and get a response from the OpenAI model.
   */
  @Post('optimal-route')
  async calculateOptimalRoute(@Body('places') places: any[]) {

    if (!places || places.length === 0) {
        throw new Error('Places array is required');
    }

    // Call the OpenAIService to generate the response
    return await this.openAiService.generateOptimalRoute(places);
  }
}
