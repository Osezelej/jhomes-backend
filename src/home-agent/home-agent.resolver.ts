import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HomeAgentService } from './home-agent.service';
import { HomeAgent } from './entities/home-agent.entity';

@Resolver(() => HomeAgent)
export class HomeAgentResolver {
  constructor(private readonly homeAgentService: HomeAgentService) {}


  @Query(() => [HomeAgent], { name: 'homeAgent' })
  findAllAgentHomes(@Args('agentid')agentid:string) {
    return this.homeAgentService.findAll(agentid);
  }


  @Query(() => HomeAgent, { name: 'homeAgent' })
  findOne(@Args('homeid') homeid:string) {
    return this.homeAgentService.findOne(homeid);
  }


}
