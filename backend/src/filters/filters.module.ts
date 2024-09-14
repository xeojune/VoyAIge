import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from './custom-exception.filter';

@Module({
    providers: [
        {
            provide: APP_FILTER,
            useClass: CustomExceptionFilter
        }
    ]
})
export class FiltersModule {}

//app_filter 가 전역 필터