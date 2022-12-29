import { Injectable, PipeTransform } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    console.log(value);
    if (value < 0) {
      throw new HttpException('value>0', 400);
    }

    return value;
  }
}
