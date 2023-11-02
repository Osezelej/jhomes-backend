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

  async findByUsername(username){
    let findbyusername = await this.UserRepository.findOneBy({ username,});
    return findbyusername;
  }
  
  async findByEmail(email){
    let findbyEmail = await this.UserRepository.findOneBy({email});
    return findbyEmail;
  }
  
  async findByPhoneNumber(phoneNumber){
    
    let findByPhone = await this.UserRepository.findOneBy({phoneNumber});
    return findByPhone
  }
  async create(createUserDto: CreateUserDto) {
    let usernameValid = false;
    let emailValid = false ;
    let phoneNumberValid = false;
    await this.findByUsername(createUserDto.username).then((res)=>{
      if(res){
        usernameValid = true;
      }
    }).then(async (res)=>{
      await this.findByEmail(createUserDto.email).then(async (res)=>{
        if(res){
          emailValid = true;
        }
        
      })
    }).then(async (res)=>{
      await this.findByPhoneNumber(createUserDto.phoneNumber).then(async (res)=>{
        if(res){
          phoneNumberValid = true;
        }
      })
    })
    if (usernameValid){
      
      throw new HttpException('user with this username already exist', 409);
    }
    if(emailValid){
      throw new HttpException('user with this email address already exist', 409);
    }
    if(phoneNumberValid){
      throw new HttpException('user with this phoneNumber already exist', 409)
    }

    let hashedPassword = await bcrypt.hash(createUserDto.password, 5)
    let data = {
      id:uuid(),
      ...createUserDto,
      password:hashedPassword

    };
    
    const user = this.UserRepository.create(data);
    
    let {password,_id, ...result}= await this.UserRepository.save(user);
    console.log(result)
    return {id:result.id, email:result.email, phoneNumber:result.phoneNumber, username:result.username};
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
