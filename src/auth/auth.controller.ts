import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Response } from "express";

@Controller('auth')
export class AuthController{
    constructor(private readonly AuthService:AuthService){}

    @Get('/google/login')
    @UseGuards(AuthGuard('google'))
    async handlegoogleLogin(){

    }
    
    @Get('/google/redirect')
    @UseGuards(AuthGuard('google'))
    async handleRedirect(@Req() req:any, @Res() res:Response){
        console.log(req.user);
        let userData = await this.AuthService.registerUser(req.user);
        res.redirect('http://localhost:3000?userid='+userData.Id + '&name='+userData.name)

    }

    @Get('facebook/login')
    @UseGuards(AuthGuard('facebook'))
    handleFacebookLogin(){

    }
    @Get('facebook/redirect')
    @UseGuards(AuthGuard('facebook'))
    async handleFaceBookRegister(@Req() req:any, @Res() res:Response){
        console.log(req.user);
        let userData = await this.AuthService.registerUser(req.user);
        res.redirect('http://localhost:3000?userid='+userData.Id + '&name='+userData.name)
        
    }


}