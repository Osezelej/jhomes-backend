import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JhomeAgent as UserEntity } from './entities/user.entity';
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
  imports:[
    TypeOrmModule.forFeature([UserEntity])
  ]
})
export class UserModule {}
