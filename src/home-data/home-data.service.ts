import { Injectable } from '@nestjs/common';
import { CreateHomeDataInput } from './dto/create-home-datum.input';
import { HomeData } from './entities/home-datum.entity';
import {v4 as uuid} from 'uuid'

@Injectable()
export class HomeDataService {
  homeData:HomeData[];

  constructor(){
    this.homeData = [];
  }

  create(createHomeDataInput: CreateHomeDataInput):HomeData {
    let dataId = uuid();
    let data:HomeData = {
      id:dataId,
      homeAddress:{
        id:dataId,
        agentId:createHomeDataInput.agentId,
        country:createHomeDataInput.homeAddress.country,
        state:createHomeDataInput.homeAddress.state,
        lga:createHomeDataInput.homeAddress.lga,
        streetName:createHomeDataInput.homeAddress.streetName
      },
      homeDesc:{
        id:dataId,
        agentId:createHomeDataInput.agentId,
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
        agentId:createHomeDataInput.agentId,
        homePriceYear:createHomeDataInput.homePrice.homePriceYear,
        homePriceMonth:createHomeDataInput.homePrice.homePriceMonth
      }

    }
    this.homeData.push(data)
    return data;
  }

  findAll(agentId:string):HomeData[] {
    return this.homeData.filter((value)=>{
      return value.homePrice.agentId === agentId;
    });
  }

  findOne(homeid: string):HomeData {
    return this.homeData.find((value)=>{
      return value.id === homeid;
    })
    
  }


  getAlldata():HomeData[]{
    return this.homeData;
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
