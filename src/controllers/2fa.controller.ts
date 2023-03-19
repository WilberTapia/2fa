import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { twoFAServices } from 'src/services/2fa.services';

@ApiTags('2FA')
@Controller('2fa')
export class twoFAController {
    constructor(private service: twoFAServices) { }

    @Get()
    index() {
        return this.service.index();
    }

    @Get('/validate/:otp')
    validate(@Param('otp') otp: string) {
        return this.service.validateOTP(otp);
    }
}
