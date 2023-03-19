import { IsIn, IsNumber, IsBoolean } from 'class-validator';

// eslint-disable-next-line prettier/prettier
export class ConfigSchema {
    @IsIn(['development', 'staging', 'production'])
    NODE_ENV: string;

    @IsNumber()
    PORT: number;

    // @IsString()
    // DB_HOST: string;

    // @IsNumber()
    // DB_PORT: number;

    // @IsString()
    // DB_USER: string;

    // @IsString()
    // DB_PASSWORD: string;

    // @IsString()
    // DB_NAME: string;

    @IsBoolean()
    DB_LOGGING: boolean;

    // @IsString()
    // SEND_GRID_KEY: string;

    // @IsString()
    // FROM_EMAIL: string;
}

export type ConfigKeys = keyof ConfigSchema;