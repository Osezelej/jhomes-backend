import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            clientID:'276413489858-kqeett722optrgoheho804ef1u1k7pba.apps.googleusercontent.com',
            clientSecret:'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',
            callbackURL:'http://localhost:4000/auth/google/redirect',
            scope:['profile', 'email'],
        }); 
    }

    async validate(accessToken:string, refreshToken:string, profile:Profile,
        done: VerifyCallback,){
        const user = {
            Id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
          };
          return done(null, user);
    }
}