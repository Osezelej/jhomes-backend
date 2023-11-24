import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('/search')
  // async getsearch(@Query()search:any){
    
  //   return await this.mongoDbService.searchDocument(search.search);
  // }
}
