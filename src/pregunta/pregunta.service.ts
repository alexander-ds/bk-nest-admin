import { Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';

@Injectable()
export class PreguntaService {
  
  constructor(
    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>,
  ) {}

  create(createPreguntaDto: CreatePreguntaDto) {
    return 'This action adds a new pregunta';
  }

  async findAll() {
    const preguntas = await this.preguntaRepository.query('select * from pregunta')
    console.log(JSON.stringify(preguntas));
    return `${JSON.stringify(preguntas)}`;
  }

  async findOne(id: number) {
    const pregunta = await this.preguntaRepository.query(`select * from pregunta where id = ${id}`)
    console.log(JSON.stringify(pregunta));
    return `${JSON.stringify(pregunta)}`;
  }

  update(id: number, updatePreguntaDto: UpdatePreguntaDto) {
    return `This action updates a #${id} pregunta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pregunta`;
  }
}
