import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HomeAgent {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
