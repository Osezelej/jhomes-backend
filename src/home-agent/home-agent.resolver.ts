import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HomeAgentService } from './home-agent.service';
import { HomeAgent } from './entities/home-agent.entity';
import { HomeCountdata, HomeData } from 'src/home-data/entities/home-datum.entity';


@Resolver(() => HomeAgent)
export class HomeAgentResolver {
  constructor(private readonly homeAgentService: HomeAgentService) {}


  @Query(() => HomeCountdata)
  findAllAgentHomes(@Args('agentid')agentid:string, @Args('skip')skip:number) {
    return this.homeAgentService.findAll(agentid, skip);
  }

  @Query(()=>HomeAgent)
  findoneAgent(@Args('agentid') agentid:string){
    return this.homeAgentService.findOneAgent(agentid)
  }

  @Query(() => HomeData, { name: 'homeAgent' })
  findOneAgentHome(@Args('homeid') homeid:string) {
    return this.homeAgentService.findOne(homeid);
  }


}
