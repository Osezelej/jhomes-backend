import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JHomeUser } from "./jhomeuser.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService{
    constructor(@InjectRepository(JHomeUser) private JHomeUserRepository:Repository<JHomeUser>){}

   private async findUser(email:string):Promise<Boolean>{
        let user = await this.JHomeUserRepository.findOneBy({email});

        if(user){
            return true;
        }
        return false;
    }

    async registerUser(user:any){
        
        try{
            let verifyUserExist = await this.findUser(user.Id);
            if(verifyUserExist){
                return user
            }
            let juser = this.JHomeUserRepository.create(
                {                                                   
                    email:user.email,
                    name:user.name,
                    id:user.Id,
                }
            );
            await this.JHomeUserRepository.save(juser);
            return user;
        }
        catch(err){
            throw new HttpException('no email was found', 400)
        }
       
    }
}