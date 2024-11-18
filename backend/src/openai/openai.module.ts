import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { OpenAIController } from './openai.controller';

@Module({
  providers: [OpenAIService], // Register the service
  controllers: [OpenAIController], // Register the controller
})
export class OpenAiModule {}
