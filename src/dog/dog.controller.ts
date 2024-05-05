import { Controller, Get, Req, Param, Query, Post, Body } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get() // rest api methodi "Get" decoratori
  public getHello(): string {
    return this.dogService.getHello();
  }

  // localhost:3000/dog/greet

  /** REQUEST, RESPONSE **/

  // @Get('greet/:id') // rest api methodi, root/params:id
  // //   @Get('greet/:id/:itemId') // rest api methodi, root/params:id/:qo`wimcha Id ham kiritiw mumkin
  // public introduce(@Req() request: Request): string {
  //   console.log('params:', request.params);
  //   console.log('query:', request.query);
  //   return this.dogService.introduce();

  /************************************************** */

  /** PARAM, QUERY examples **/

  // @Get('greet/:id') // rest api methodi, root/params:id
  // //   @Get('greet/:id/:itemId') // rest api methodi, root/params:id/:qo`wimcha Id ham kiritiw mumkin
  // public introduce(
  //   @Param('id') id: string,
  //   @Query('name') name: string,
  // ): string {
  //   console.log('id:', id);
  //   console.log('name:', name);
  //   return this.dogService.introduce();
  // }

  /************************************************** */

  /** PARAM, QUERY => STANDARD korinishi **/

  @Get('greet/:id') // rest api methodi, root/params:id
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.introduce();
  }

  @Post('edit') // rest api methodi "Post" decorator, => POSTMAN.dan create new req."POST"
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }
}
