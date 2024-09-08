import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { request, Request } from 'express';
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
        console.log('inside authcontroller status method');
        console.log(req.user);
        return req.user;
    }
}
