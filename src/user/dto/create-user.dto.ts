import { IsAlphanumeric, IsEmail, IsPhoneNumber, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {

          @IsAlphanumeric()
          @MinLength(5)
          username:string;
          
          @IsEmail()
          email:string;

          @IsPhoneNumber('NG')          
          phoneNumber:string;

          @IsStrongPassword()
          password:string;

          
}

export class LoginUserDto{
          @IsPhoneNumber()
          phoneNumber:string;

          @IsStrongPassword()
          password:string;
}