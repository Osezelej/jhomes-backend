import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class HomeAddressInput{

          @Field()
          streetName:string;
        
          @Field()
          country:string;
        
          @Field()
          state:string;
        
          @Field()
          lga:string;

}

@InputType()
export class HomeDescriptionInput{

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

@InputType()
export class HomePriceInput{
            
  @Field()
  homePriceYear:string;

  @Field()
  homePriceMonth:string;
}
@InputType()
export class CreateHomeDataInput {
                    
          @Field(of=>ID)
          agentId:string;

          @Field()
          homeAddress:HomeAddressInput;

          @Field()
          homeDescription:HomeDescriptionInput;

          @Field()
          homePrice:HomePriceInput;

          @Field(()=>[String])
          homeImage:string[];
}

