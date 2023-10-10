import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHomeAgentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
