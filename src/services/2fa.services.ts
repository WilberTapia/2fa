import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';

@Injectable()
export class twoFAServices {

    async index() {
        const secret = speakeasy.generateSecret();
        return secret.otpauth_url;
    }

    async validateOTP(userToken: string) {
        const base32secret = "ENKEMMDFG5JHW6DGOJ2G67JFOMSUWUSXF44W2V3XHJBHCVKGMRGQ";
        const verified = speakeasy.totp.verify({
            secret: base32secret,
            encoding: 'base32',
            token: userToken
        });

        return verified;
    }

}