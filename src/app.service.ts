import { Injectable } from '@nestjs/common';

@Injectable() // decorator name
export class AppService {
  public getHello(): string {
    return 'Hello WWorld!';
  }

  public getDetail(): string {
    return 'Heere are Zoo details!';
  }
}
