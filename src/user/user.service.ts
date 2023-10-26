import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {v4 as uuid} from 'uuid';
@Injectable()
export class UserService {
  userData:User[]
  constructor(){
    this.userData = [
     {
      username:"osezelej",
      email:"2osezelejoseph@gmail.com",
      password:"@Bestboy123",
      phoneNumber:"08076320300",
      id:"1"
     },
     {
      username:"eto david",
      email:"3osezelejoseph@gmail.com",
      password:"@Bestboy123",
      phoneNumber:"08076320303",
      id:"2"
     },
     {
      username:"Emmanuel Joshua",
      email:"osezelejoseph@gmail.com",
      password:"@Bestboy123",
      phoneNumber:"08076320310",
      id:"3"
     },
    ]
  }
  
  create(createUserDto: CreateUserDto) {
    let data:User = {
      id:uuid(),
      ...createUserDto
    }
    this.userData.push(data);
    let {password, ...result} = data;
    return result;
  }

  findOne(loginUserDto:LoginUserDto) {
    const {password, ...result} = this.userData.find((value)=>{
        return (value.username === loginUserDto.username && value.password === loginUserDto.password)
      })
      return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

}
