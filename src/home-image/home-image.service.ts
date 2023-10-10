import { Injectable } from '@nestjs/common';
import { CreateHomeImageDto } from './dto/create-home-image.dto';
import { UpdateHomeImageDto } from './dto/update-home-image.dto';

@Injectable()
export class HomeImageService {
  create(createHomeImageDto: CreateHomeImageDto) {
    return 'This action adds a new homeImage';
  }

  findAll() {
    return `This action returns all homeImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeImage`;
  }

  update(id: number, updateHomeImageDto: UpdateHomeImageDto) {
    return `This action updates a #${id} homeImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeImage`;
  }
}
