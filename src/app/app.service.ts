import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testFunction(): string {
    return 'Exemplo usa o service';
  }
}
