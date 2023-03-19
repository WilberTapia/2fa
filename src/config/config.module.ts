import { Module } from '@nestjs/common';
import { ConfigService } from './config.servies';

@Module({
    providers: [ConfigService],
    exports: [ConfigService],
})
export class ConfigModule { }