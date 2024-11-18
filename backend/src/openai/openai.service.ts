import { Injectable } from "@nestjs/common";
import { OpenAI } from "@langchain/openai";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAIService {
    private model: OpenAI;

    constructor(private configService: ConfigService) {
        const OpenAIapiKey = this.configService.get<string>('OPENAI_API_KEY');
        if (!OpenAIapiKey) {
            throw new Error('OPENAI_API_KEY is not defined in environment variables');
        }

        this.model = new OpenAI({
            openAIApiKey: OpenAIapiKey,
            temperature: 0.7,
            maxTokens: 1500,
        });
    }

    async generateOptimalRoute(places: any[]): Promise<any> {
        if (!places || places.length === 0) {
            throw new Error('No place is provided.');
        }

        const prompt = `
            You are a travel planner. Based on the following places chosen by the user, calculate the optimal route for a one-day trip. Optimize for minimal travel time and provide the necessary details for a map display.

            Places Selected:
            ${places.map((place, index) => `${index + 1}. ${place.name} (Latitude: ${place.latitude}, Longitude: ${place.longitude})`).join('\n')}

            Additional Requirements:
            - Provide the route in JSON format.
            - Each place should include:
              - \`name\`: Name of the place.
              - \`latitude\`: Latitude of the place.
              - \`longitude\`: Longitude of the place.
              - \`details\`: A brief description of the activity or attraction at the place.
            - Include the total travel time for the route.
            - Include travel details between each pair of locations:
              - \`from\`: Name of the starting place.
              - \`to\`: Name of the destination place.
              - \`travelTime\`: Estimated travel time (e.g., "10 minutes walking").
              - \`mode\`: Mode of transport (e.g., "walking", "driving").

            Return the response in the following JSON format:
            {
              "route": [
                { "name": string, "latitude": number, "longitude": number, "details": string },
                ...
              ],
              "totalTravelTime": string,
              "travelDetails": [
                { "from": string, "to": string, "travelTime": string, "mode": string },
                ...
              ]
            }
        `;

        try {
            const response = await this.model.invoke(prompt);

            // Parse the JSON response
            let parsedResponse;
            try {
                parsedResponse = JSON.parse(response);
            } catch (error) {
                console.warn('Response is not valid JSON. Attempting to extract JSON...');
                
                // Extract JSON using regex
                const jsonMatch = response.match(/{.*}/s);
                if (jsonMatch) {
                    parsedResponse = JSON.parse(jsonMatch[0]);
                } else {
                    throw new Error('Failed to parse response as JSON');
                }
            }

            // Validate the JSON structure
            if (!parsedResponse.route || !parsedResponse.travelDetails) {
                throw new Error('Invalid response structure from OpenAI');
            }

            return parsedResponse;
        } catch (error) {
            console.error('Error generating optimal route from OpenAI:', error);
            throw new Error('Failed to generate optimal route');
        }
    }
}
