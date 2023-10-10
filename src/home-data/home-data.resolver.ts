import { Resolver, Mutation, Args, Query,} from '@nestjs/graphql';
import { HomeDataService } from './home-data.service';
import { HomeData } from './entities/home-datum.entity';
import { CreateHomeDataInput } from './dto/create-home-datum.input';


@Resolver(() => HomeData)
export class HomeDataResolver {
  constructor(private readonly homeDataService: HomeDataService) {}

  @Mutation(() => HomeData)
  createHome(@Args('createHomeDataInput') createHomeDataInput: CreateHomeDataInput) {
    return this.homeDataService.create(createHomeDataInput);
  }


  @Query(()=>HomeData)
  getHomeData(@Args('homeid')homeid:string){
    return this.homeDataService.findOne(homeid);
  }


  @Query(()=>[HomeData])
  getAllHomeData(){
    return this.homeDataService.getAlldata();
  }

  @Query(()=>[HomeData])
  findNGetHomes(@Args('userSearchParams')search: string){
    this.homeDataService.filterandgetHomeData(search);
  }

}
