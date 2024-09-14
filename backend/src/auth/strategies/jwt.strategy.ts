import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        //configure logic on how jwt is going to work
        super({
            //use authheader as field
            //whenever we make request and send json webtoken -> look inside header and look for bearertoken (if not found reject request)
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //if json webtoken is expired no need checking again
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        })
    }

    validate(payload: any) {
        console.log('inside jwt strategy validate')
        console.log(payload);
        return payload;
    }
}