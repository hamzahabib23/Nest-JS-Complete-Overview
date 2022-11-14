import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  //Dependency Injection of App Service
  //Nest JS has provided me AppService object - using provider
  constructor(private readonly appService: AppService) {}

  @Get()
  getView(@Res() res: Response): any {
    return res.render('index', { books: this.appService.getAllBooks() });
  }
  @Get('test')
  Hello(@Res() res: Response): any {
    return res.render('test', { test: this.appService.getHello() });
  }
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
