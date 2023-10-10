import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeImageDto } from './create-home-image.dto';

export class UpdateHomeImageDto extends PartialType(CreateHomeImageDto) {}
