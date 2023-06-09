import * as dotenv from 'dotenv';
import { Injectable, Logger } from '@nestjs/common';
import { validateSync } from 'class-validator';
import { ConfigSchema, ConfigKeys } from './config.schema';

@Injectable()
export class ConfigService {
    logger = new Logger('Config');
    config = new ConfigSchema();

    constructor() {
        dotenv.config();
        this.config = new ConfigSchema();
        this.config.NODE_ENV = process.env.NODE_ENV || 'development';
        this.config.PORT = parseInt(process.env.PORT, 10) || 3000;
        this.config.DB_LOGGING = JSON.parse(process.env.DB_LOGGING || 'false');
        this.validate();
    }

    get(key: ConfigKeys): any {
        return this.config[key];
    }

    /**
     * Checks that all the environment variables marked
     * as required are available. Uses class-validator.
     */
    validate(): void {
        const errors = validateSync(this.config);

        if (errors.length === 0) return;

        errors.forEach(error => {
            for (const message in error.constraints) {
                this.logger.error(error.constraints[message]);
            }
        });

        process.exit(1);
    }
}