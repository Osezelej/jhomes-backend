import { Injectable } from '@nestjs/common';
import { HomeData } from 'src/home-data/entities/home-datum.entity';
import { HomeDataService, homeCountData } from 'src/home-data/home-data.service';
import { UserService } from 'src/user/user.service';


@Injectable()
export class HomeAgentService {
  constructor(private readonly HomeDataService:HomeDataService, private readonly UserService:UserService){}
  async findAll(agentId:string, skip:number):Promise<homeCountData> {
   return await this.HomeDataService.findAll(agentId, skip);
  }

  async findOne(homeid: string):Promise<HomeData> {
    return await this.HomeDataService.findOne(homeid);
  }

 async findOneAgent(agentid:string){
  return await this.UserService.findByagentid(agentid);
 }

  remove(id: number) {
    return `This action removes a #${id} homeAgent`;
  }

}
