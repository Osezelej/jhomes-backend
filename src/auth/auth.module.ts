import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './GoogleStrategy';
import { GoogleAuthGuard } from './Guards';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JHomeUser } from './jhomeuser.entity';
import { FaceBookStrategy } from './FBstrategy';

@Module({
    controllers:[AuthController],
    providers:[GoogleStrategy, GoogleAuthGuard, AuthService, FaceBookStrategy],
    imports:[
        TypeOrmModule.forFeature([JHomeUser])
    ]

})
export class AuthModule {}
