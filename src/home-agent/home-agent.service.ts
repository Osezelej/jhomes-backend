import { Injectable } from '@nestjs/common';
import { HomeData } from 'src/home-data/entities/home-datum.entity';
import { HomeDataService } from 'src/home-data/home-data.service';

@Injectable()
export class HomeAgentService {
  constructor(private readonly HomeDataService:HomeDataService){}
  findAll(agentId:string):HomeData[] {
    return this.HomeDataService.homeData.filter((value)=>{
      return value.homeAddress.agentId === agentId;
    })
  }

  findOne(homeid: string):HomeData {
    return this.HomeDataService.findOne(homeid);
  }

 

  remove(id: number) {
    return `This action removes a #${id} homeAgent`;
  }
}
