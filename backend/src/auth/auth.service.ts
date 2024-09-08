import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {
        id: 1,
        username: 'anson',
        password: 'password'
    },
    {
        id: 2,
        username: 'jack',
        password: 'password123'
    }
    
];
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    //evaluate comparing to database
    validateUser({username, password}: AuthPayloadDto){
        const findUser = fakeUsers.find((user) => user.username === username);
        if (!findUser) return null;
        if (password === findUser.password) {
            //remove password and repackage user with only username and id
            const { password, ...user } = findUser;
            //create json web token (use signoptions & secret)
            return this.jwtService.sign(user)
        } else {
            throw UnauthorizedException;
        }
    }
}
