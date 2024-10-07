import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Método da solicitação -> Ler (Read) -> CRUD
  // /home/hello
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('exemplo')
  testFunction(): string {
    return this.appService.testFunction();
  }
}
