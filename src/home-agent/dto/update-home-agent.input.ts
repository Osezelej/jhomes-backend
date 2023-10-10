import { CreateHomeAgentInput } from './create-home-agent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomeAgentInput extends PartialType(CreateHomeAgentInput) {
  @Field(() => Int)
  id: number;
}
