import { CreateHomeDataInput } from './create-home-datum.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomeDatumInput extends PartialType(CreateHomeDataInput) {
  @Field(() => Int)
  id: number;
}
