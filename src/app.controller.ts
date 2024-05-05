import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:3000
@Controller() // decorator name
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // rest api methodi
  public getHello(): string {
    return this.appService.getHello();
  }

  // localhost:3000/detail
  @Get('detail') // rest api methodi
  public getDetail(): string {
    return this.appService.getDetail();
  }
}
