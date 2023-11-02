import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class HomeAddress{
  @Field(of=>ID)
  id:string;

  @Field()
  streetName:string;

  @Field()
  country:string;

  @Field()
  state:string;

  @Field()
  lga:string;
}

@ObjectType()
export class HomeDescription{
  @Field(of=>ID)
  id:string;

  @Field(of=>Int)
  bedroom:number;

  @Field(of=>Int)
  bathroom:number;

  @Field(of=>Int)
  sittingroom:number;

  @Field(of=>Int)
  toilet:number;

  @Field(of=>Int)
  dinningroom:number;

  @Field(of=>Int)
  kitchen:number;

  @Field()
  homeType:string;

  @Field()
  saleType:string;

  @Field()
  others:string

}

@ObjectType()
export class HomePrice{
  @Field(of=>ID)
  id:string;

 
  @Field()
  homePriceYear:string;

  @Field()
  homePriceMonth:string;
}

@ObjectType( )
export class HomeData {
  @Field(of =>ID)
  id:string;

  @Field(of=>ID)
  agentId:string;
  
  @Field()
  homeDesc:HomeDescription;

  @Field()
  homeAddress:HomeAddress;

  @Field()
  homePrice:HomePrice;
  
  @Field(()=>[String])
  homeImage:string[];
}


