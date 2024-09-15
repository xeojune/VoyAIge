import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    //inject authservice to controller
    constructor(private authService: AuthService) {}

    @Post('login')
    // @UseGuards(AuthGuard('local'))
    //using guard that we have made (whenever we use the post request we go through the local guard)

    // *** Order: Post Request -> Local Guard (invoke can activate) -> invoke strategy validate method
    @UseGuards(LocalGuard)

    //NEW ** make request instead
    login(@Req() req: Request) {
        return req.user
    }
    //OLD ** we can remove this because now validateUser is in local strategy
    // login(@Body() authPayload: AuthPayloadDto) {
        // const user = this.authService.validateUser(authPayload);
        // return user;
    // }

    @Get('status')
    //use this jwtauthguard to protect any other request methods
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request) {
        console.log(req.user);
        return req.user;
    }
}
