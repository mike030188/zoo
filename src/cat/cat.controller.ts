import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

// localhost:3000/cat
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get() // rest api methodi
  public getHello(): string {
    return this.catService.getHello();
  }

  // localhost:3000/cat/greet
  @Get('greet') // rest api methodi
  public introduce(): string {
    return this.catService.introduce();
  }
}
