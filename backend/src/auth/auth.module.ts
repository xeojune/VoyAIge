import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            //value used to encrypt payload for generating webtoken
            secret: '@VoyAIge5!74',
            //how long json webtoken can live for
            signOptions: { expiresIn: '1h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
