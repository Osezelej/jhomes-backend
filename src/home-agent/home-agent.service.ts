import { Injectable } from '@nestjs/common';
import { HomeData } from 'src/home-data/entities/home-datum.entity';
import { HomeDataService } from 'src/home-data/home-data.service';

@Injectable()
export class HomeAgentService {
  constructor(private readonly HomeDataService:HomeDataService){}
  async findAll(agentId:string):Promise<HomeData[]> {
   return await this.HomeDataService.findAll(agentId)
  }

  async findOne(homeid: string):Promise<HomeData> {
    return await this.HomeDataService.findOne(homeid);
  }

 

  remove(id: number) {
    return `This action removes a #${id} homeAgent`;
  }
}
