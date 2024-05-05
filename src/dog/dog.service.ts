import { Injectable } from '@nestjs/common';
// Schema Model

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW-WOW';
  }

  public introduce(): string {
    return 'My name is REX!';
  }

  public modifyDetail(): string {
    return 'Successfully modified';
  }
}
