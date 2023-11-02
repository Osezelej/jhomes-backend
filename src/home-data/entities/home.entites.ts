import { Entity, Column, PrimaryColumn, ObjectIdColumn } from "typeorm";

class HomeAddress{

  id:string;

  agentId:string;
  
  streetName:string;

  country:string;

  state:string;

  lga:string;
}



class HomeDescription{

  id:string;

  bedroom:number;

  bathroom:number;

  sittingroom:number;

  toilet:number;

  dinningroom:number;

  kitchen:number;

  homeType:string;

  saleType:string;

  others:string
}


export class HomePrice{

  id:string;
  
  homePriceYear:string;

  homePriceMonth:string;
}


@Entity()
export class HomeData {
  @ObjectIdColumn()
  _id:string;

  @Column()
  id:string;

  @Column()
  agentId:string;

  @Column()
  homeDesc:HomeDescription;

  @Column()
  homeAddress:HomeAddress;

  @Column()
  homePrice:HomePrice;

  @Column()
  homeImage:[string];

}


