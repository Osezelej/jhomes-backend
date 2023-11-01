import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/create-user.dto';
import {JhomeAgent as UserEntity } from './entities/user.entity';
import {v4 as uuid} from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private UserRepository:Repository<UserEntity>){}
  async create(createUserDto: CreateUserDto) {

    let findbyusername = await this.UserRepository.findOneBy({ username:createUserDto.username, });
    let findbyEmail = await this.UserRepository.findOneBy({email:createUserDto.email});
    let findByPhone = await this.UserRepository.findOneBy({phoneNumber:createUserDto.phoneNumber});

    if (findbyusername){
        throw new HttpException('user with this username already exist', 409)
    }
    if(findbyEmail){
      throw new HttpException('user with this email address already exist', 409);
    }
    if(findByPhone){
      throw new HttpException('user with this phoneNumber already exist', 409)
    }

    let hashedPassword = await bcrypt.hash(createUserDto.password, 5)
    let data = {
      id:uuid(),
      ...createUserDto,
      password:hashedPassword

    };
    console.log(data)
    const user = this.UserRepository.create(data);
    
    let {password, ...result}= await this.UserRepository.save(user);
    return result;
  }

  async findOne(loginUserDto:LoginUserDto) {
    let {password, ...result} = await this.UserRepository.findOneBy({username:loginUserDto.username});
  
    if (result){
      let isValid = await bcrypt.compare(password, loginUserDto.password);
      if(isValid){
        return result
      }else{
        throw new HttpException('user not found', 404)
      }
    }else{
      throw new HttpException('User not found', 404)
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

}
