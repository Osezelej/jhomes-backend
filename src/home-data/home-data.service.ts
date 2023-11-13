import { Injectable } from '@nestjs/common';
import { CreateHomeDataInput } from './dto/create-home-datum.input';
import { HomeData } from './entities/home-datum.entity';
import {v4 as uuid} from 'uuid'
import { InjectRepository } from '@nestjs/typeorm';
import { HomeData as HomeEntity } from './entities/home.entites';
import { Repository } from 'typeorm';

@Injectable()
export class HomeDataService {
  homeData:HomeData[];

  constructor(@InjectRepository(HomeEntity) private homeDataRepository:Repository<HomeEntity>,){}
  

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

  async findAll(agentId:string, skip:number):Promise<HomeData[]> {
    let numberofHomes = await this.homeDataRepository.count({where:{
      agentId
    }});

    if (skip === 1){
      return await this.homeDataRepository.find({
        take:10,
        where:{
          agentId,
        }
      })
    }else{
      if(numberofHomes > 10){
        return await this.homeDataRepository.find({
          skip: 10 * skip,
          take: 10,
          where:{
            agentId,
          }
        })
      }else{
        return await this.homeDataRepository.find({
          take:10,
          where:{
            agentId,
          }
        })
      }
    }
  }

  async findOne(homeid: string):Promise<HomeData> {
   return await this.homeDataRepository.findOneBy({id:homeid});
  }


  async getAlldata():Promise<HomeData[]>{
    return await this.homeDataRepository.find();
  }

  filterandgetHomeData(userSearchParams:string){
    let addressData = this.homeData.filter((value)=>{
      return (
          value.homeAddress.country.toLowerCase().includes(userSearchParams.toLowerCase()) 
        || value.homeAddress.lga.toLowerCase().includes(userSearchParams.toLowerCase()) 
        || value.homeAddress.state.toLowerCase().includes(userSearchParams.toLowerCase())  
        || value.homeAddress.streetName.toLowerCase().includes(userSearchParams.toLowerCase()) 
      );
    })

    let descriptionData = this.homeData.filter((value)=>{
      return (
          value.homeDesc.bathroom.toString().toLowerCase().includes(userSearchParams.toLowerCase()) 
        || value.homeDesc.bedroom.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.toilet.toString().toLowerCase().includes(userSearchParams.toLowerCase())  
        || value.homeDesc.dinningroom.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.homeType.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.kitchen.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.saleType.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.sittingroom.toString().toLowerCase().includes(userSearchParams.toLowerCase())
        || value.homeDesc.others.toString().toLowerCase().includes(userSearchParams.toLowerCase())
      );
    })

    let priceData = this.homeData.filter((value)=>{
      return (
          value.homePrice.homePriceMonth.toLowerCase().includes(userSearchParams.toLowerCase()) 
        ||  value.homePrice.homePriceYear.toLowerCase().includes(userSearchParams.toLowerCase()) 
      );
    })

    let result = [...addressData, ...descriptionData, ...priceData];
    
    return result;
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
