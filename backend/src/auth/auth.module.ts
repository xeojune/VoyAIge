import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';


@Module({
    imports:[
        ConfigModule.forRoot({envFilePath: '.env'}),
        PassportModule,
        JwtModule.register({
            //value used to encrypt payload for generating webtoken
            secret: process.env.JWT_SECRET,
            //how long json webtoken can live for
            signOptions: { expiresIn: '1h'},
        }),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
