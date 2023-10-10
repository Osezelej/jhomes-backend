import { Controller,  Post, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

const cStorage = diskStorage({
  destination(req, file, callback) {
    callback(null, './src/home-image/assets')
  },
  filename(req, file, callback) {
    return callback(null, file.originalname)
  },
})

@Controller('/image/upload')
export class HomeImageController {
  constructor(private readonly homeImageService: HomeImageService) {}
   
  @UseInterceptors(FileFieldsInterceptor([
    {maxCount:20, name:'bedRoom', },
    {maxCount:20, name:"bathRoom"},
    {maxCount:20, name:"toilet"},
    {maxCount:20, name:"sittingRoom"},
    {maxCount:20, name:"dinningRoom"}
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
      dinningRoom?:Express.Multer.File[]
    } ,
     @Body() Body) {
      console.log(file)
  }


}


