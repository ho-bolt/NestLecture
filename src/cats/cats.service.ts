import { Injectable } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Injectable()
export class CatsService {
  hiCatServiceProduct() {
    return 'hello Cat';
  }
}
