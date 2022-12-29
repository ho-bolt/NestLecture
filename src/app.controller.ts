import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // localhost:8000/cats/hello
  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Get(':id')
  getHi() {
    return this.catsService.hiCatServiceProduct();
  }
}
