import { HttpException, Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateHomeDataInput } from './dto/create-home-datum.input';
import { HomeData } from './entities/home-datum.entity';
import {v4 as uuid} from 'uuid'
import { InjectRepository } from '@nestjs/typeorm';
import { HomeData as HomeEntity } from './entities/home.entites';
import { Repository, } from 'typeorm';
import { MongoClient } from 'mongodb';
import { MongodbService } from 'src/home-data/mongo.service';

// this is the response interface for this service.
export interface homeCountData{
  count:number,
  homeData:HomeData[]

}

@Injectable()
export class HomeDataService {
  homeData:HomeData[];

  constructor(@InjectRepository(HomeEntity) private homeDataRepository:Repository<HomeEntity>, private readonly mongodbService:MongodbService){}
  

  async create(createHomeDataInput: CreateHomeDataInput):Promise<HomeData> {
    let dataId = uuid();
    let data:HomeData = {
      id:dataId,
      agentId:createHomeDataInput.agentId,
      homeAddress:{
        id:dataId,
        country:createHomeDataInput.homeAddress.country,
        state:createHomeDataInput.homeAddress.state,
        lga:createHomeDataInput.homeAddress.lga,
        streetName:createHomeDataInput.homeAddress.streetName
      },
      homeDesc:{
        id:dataId,
        bedroom:createHomeDataInput.homeDescription.bedroom,
        bathroom:createHomeDataInput.homeDescription.bathroom,
        toilet:createHomeDataInput.homeDescription.toilet,
        sittingroom:createHomeDataInput.homeDescription.sittingroom,
        dinningroom:createHomeDataInput.homeDescription.dinningroom,
        others: createHomeDataInput.homeDescription.others,
        saleType:createHomeDataInput.homeDescription.saleType,
        homeType:createHomeDataInput.homeDescription.homeType,
        kitchen:createHomeDataInput.homeDescription.kitchen
      },
      homePrice:{
        id:dataId,
        homePriceYear:createHomeDataInput.homePrice.homePriceYear,
        homePriceMonth:createHomeDataInput.homePrice.homePriceMonth
      },
      homeImage: [...createHomeDataInput.homeImage]
    }
    let savedHomeData =  this.homeDataRepository.create(data);

    return await this.homeDataRepository.save(savedHomeData);
  }
 
  async findAll(agentId:string, skip:number):Promise<homeCountData> {
    console.log(agentId)
    let [items, numberofHomes] = await this.homeDataRepository.findAndCount({where:{
      agentId
    }});
    console.log(numberofHomes);
    let data = await this.homeDataRepository.find({
      skip: 10 *(skip - 1),
      take:10,
      where:{
        agentId,
      }
    })
    let returnData:homeCountData = {count:numberofHomes, homeData:data}
    return returnData;

  }

  async findOne(homeid: string):Promise<HomeData> {
   return await this.homeDataRepository.findOneBy({id:homeid});
  }


  async getAlldata(skip:number):Promise<homeCountData>{
    let numberofHomes = await this.homeDataRepository.count({});
    return {count:numberofHomes, homeData:await this.homeDataRepository.find({
      take:10,
      skip:10 * (skip - 1)
    })} 
  }


  searchExist(data:any, items:any, from:boolean){
    
    for (let item of items){
      let d = data.find((value)=>{
         return value.id == item.id;
       })
       if (d!=undefined){
         continue;
       }else{
         data.push(item);
       }
     }
     return data;
  }

  async searchHome(city:string, state:string, skip:number){
    let data = [];
    if(city.length > 0 && data.length < 10){
      let search_city:any = await this.mongodbService.searchDocument(city, skip);
      data = this.searchExist(data, search_city, true);
      }
      if(data.length < 10 && state.length > 0){
        console.log(data)
        let search_state:any = await this.mongodbService.searchDocument(state, skip);
         data = this.searchExist(data, search_state, false);
      }
  

    let otheResult:homeCountData = await this.getAlldata(skip);
    if (data.length < 10){
      data = this.searchExist(data, otheResult.homeData, true);
    }
    
     return {count:otheResult.count, homeData:data};
  }

  

  remove(homeId:string, agentId:string):string {
    try {

      return "successful" ;
    
    }
    catch(e){
      return "unsuccessfull"
    }
  }
}
