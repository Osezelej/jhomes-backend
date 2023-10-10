import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  userData:CreateUserDto[]
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
    
    this.userData.push(createUserDto);
    return this.userData;
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
