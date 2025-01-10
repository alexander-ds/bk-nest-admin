import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const puerto = configService.get('PORT_APP') ? configService.get('PORT_APP') : 3000;
  await app.listen(
    puerto || 3000 , () => {
      console.log("******************\nServer run in port\n==>    " + puerto+"    <==\n******************");
    }
  );
}
bootstrap();
