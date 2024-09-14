import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    //in this method we invoke validateUser from auth.service
    validate(username: string, password: string) {
        // console.log('inside local strategy');
        const user = this.authService.validateUser({username, password});
        //if the user doesn't exist it throws unauthroized 401 error
        if (!user) throw new UnauthorizedException();
        return user;
    }
}