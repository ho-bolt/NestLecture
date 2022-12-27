import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//공급자는 만들어짐
// 이제 소비자가 쓸 수 있도록 의존성 주입을 해주어야 함
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}) , ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });
    next();
  }
}
