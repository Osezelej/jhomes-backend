import { IsAlphanumeric, IsEmail, IsPhoneNumber, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {
          id:string;
          
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
          @IsAlphanumeric()
          @MinLength(5)
          username:string;

          @IsStrongPassword()
          password:string;
}