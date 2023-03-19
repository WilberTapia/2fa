import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { services } from './services';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule
  ],
  controllers,
  providers: [...services],
})
export class AppModule { }
