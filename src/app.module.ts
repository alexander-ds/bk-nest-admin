import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PruebaModule } from './prueba/prueba.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { ResultadoModule } from './resultado/resultado.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST_BBDD'),
        port: Number(configService.get('PORT_BBDD')),
        username: configService.get('USER_BBDD'),
        password: configService.get('PASSWRD_BBDD'),
        database: configService.get('BBDD'),
        entities: [],
        synchronize: false,
        autoLoadEntities:true,
        subscribers:[
        ],
      }),
      inject:[ConfigService]     
    }),
    EstudianteModule,
    PruebaModule,
    PreguntaModule,
    ResultadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
