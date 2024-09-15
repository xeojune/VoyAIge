import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    //evaluate comparing to database
    async validateUser({username, password}: LoginDto): Promise<{ token: string }>{

        const findUser = await this.userModel.findOne({ username }).exec();

        if (!findUser) {
            throw new UnauthorizedException('Unregistered User');
        }

        

        // Compare the provided password with the hashed password in the MongoDB database
        // const isPasswordMatched = await bcrypt.compare(password, findUser.password);
        // if (!isPasswordMatched) {
        //     console.log("password not match")
        //     throw new UnauthorizedException('Invalid Email or Password');
        // }
        if (password !== findUser.password) {
            throw new UnauthorizedException('Invalid Password');
        }
    

        // Generate a JWT token with the user's id
        const token = this.jwtService.sign({ id: findUser._id }); // `findUser.id` for fakeUsers

        return { token };
    }
}
