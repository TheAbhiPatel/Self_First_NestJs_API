import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>This is self made Api's with NestJS!</h1>`;
  }
}
