import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-facebook';

@Injectable()
export class FaceBookStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            clientID:'2631285217038355',
            clientSecret:'a9609f1ee1438abeb920689abccd02df',
            callbackURL:'http://localhost:4000/auth/faceBook/redirect',
            profileFields:['id', 'displayName', 'photos', 'email']
        });
    };

    async validate(accessToken:string, refreshToken:string, profile:any, done:VerifyCallback){
        const user = {
            Id: profile.id,
            email: profile.emails ? profile.emails[0].value : null,
            name: profile.displayName,
          };
          return done(null, user);
    }



}