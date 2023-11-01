import { Controller,  Post, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { join } from 'path';
console.log()
const cStorage = diskStorage({
  destination(req, file, callback) {
    callback(null,  join(__dirname, '..', '..', 'src', 'home-image', 'assets'))
  },
  filename(req, file, callback) {
    console.log(req.query)
    return callback(null,  req.query.agentid + '_' + file.originalname)
  },
})

@Controller('/image/upload')
export class HomeImageController {
  constructor(private readonly homeImageService: HomeImageService) {}
   
  @UseInterceptors(FileFieldsInterceptor([
    {maxCount:20, name:"bedRoom" },
    {maxCount:20, name:"bathRoom"},
    {maxCount:20, name:"toilet"},
    {maxCount:20, name:"sittingRoom"},
    {maxCount:20, name:"dinningRoom"},
    {maxCount:20, name:"kitchen"}
  ], {
    storage:cStorage,
  }))
  @Post()
  uploadImages(
    @UploadedFiles() file:{
      bedRoom?:Express.Multer.File[],
      bathRoom?:Express.Multer.File[] ,
      toilet?:Express.Multer.File[],
      sittingRoom?:Express.Multer.File[],
      dinningRoom?:Express.Multer.File[],
      kitchen?:Express.Multer.File[],
    } ,
     @Body() Body) {
      // console.log(file)
  }


}


