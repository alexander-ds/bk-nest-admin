import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h3>Backend construido con</h3><h1>NESTJS</h1>`;
  }
}
