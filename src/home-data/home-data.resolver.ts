import { Resolver, Mutation, Args, Query,} from '@nestjs/graphql';
import { HomeDataService } from './home-data.service';
import { HomeCountdata, HomeData } from './entities/home-datum.entity';
import { CreateHomeDataInput } from './dto/create-home-datum.input';


@Resolver(() => HomeData)
export class HomeDataResolver {
  constructor(private readonly homeDataService: HomeDataService) {}

  @Mutation(() => HomeData)
  createHome(@Args('createHomeDataInput') createHomeDataInput: CreateHomeDataInput) { 
    console.log(createHomeDataInput);
    return this.homeDataService.create(createHomeDataInput);
  }



  @Query(()=>HomeData)
  getHomeData(@Args('homeid')homeid:string){
    return this.homeDataService.findOne(homeid);
  }

  @Query(()=>HomeCountdata)
  async searchHome(@Args('data')data:string, @Args('skip')skip:number){
    return await this.homeDataService.searchHome(data, '', skip); 
  }


  @Query(()=>HomeCountdata)
  getAllHomeData(@Args('skip')skip:number){
    return this.homeDataService.getAlldata(skip);
  }
  @Query(()=>HomeCountdata)
  async getHomeonLocation(@Args('city')city:string, @Args('state')state:string, @Args('skip')skip:number){
    return await this.homeDataService.searchHome(city, state, skip);
  }

}
