import {
  Controller,
  Param,
  ParseIntPipe,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import {
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/common/exceptions/pipes/positveInt.pipe';
import { Body } from '@nestjs/common/decorators';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  // @UseFilters(HttpExceptionFilter) //여기다가 넣으면 throw new HttpException에서 발생한 exception이 필터링되서 나온다.
  getAllCat() {
    console.log('hello controller');
    return { cats: 'get all cat api' };
  }

  @Get()
  getCurrentCat() {
    return 'current Cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return 'signUp';
  }
  @Post('login')
  logIn() {
    return 'login';
  }
  @Post('logout')
  logOut() {
    return 'logOut';
  }
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
