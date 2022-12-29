import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServiceProduct() {
    console.log('Hello Cat');
    return 'hello Cat';
  }
}
