import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class GoogleAuthGuard extends AuthGuard('google'){
      canActivate(context:ExecutionContext){
        const activate =  super.canActivate(context) ;
        const request =context.switchToHttp().getRequest();
        super.logIn(request);
        return activate;
    }

}