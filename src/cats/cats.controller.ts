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
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  //   @UseFilters(HttpExceptionFilter)   //여기다가 넣으면 throw new HttpException에서 발생한 exception이 필터링되서 나온다.
  getAllCat() {
    throw new HttpException('api is broken ', 401);
    return 'all Cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'get one cat api ';
  }

  @Post()
  createCat() {
    return 'create Cat';
  }

  @Put(':id')
  updateCat() {
    return 'update Cat';
  }

  @Patch(':id')
  updatePartCat() {
    return 'updatePartCat';
  }

  @Delete(':id')
  deleteCat() {
    return 'deleteCat';
  }
}
