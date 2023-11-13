import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class HomeAgent {
  @Field(()=>ID)  
  id:string;

  @Field()
  username:string;

  @Field()
  email:string;

  @Field()
  phoneNumber:string;
  
}
