import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Resultado } from './entities/resultado.entity'

@Injectable()
export class ResultadoService {

  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
  ) {}

  create(createResultadoDto: CreateResultadoDto) {
    return 'This action adds a new resultado';
  }

  async findAll() {
    const resultados = await this.resultadoRepository.query('select * from resultado')
    console.log(JSON.stringify(resultados));
    return `${JSON.stringify(resultados)}`;
  }

  async findOne(id: number) {
    const resultado = await this.resultadoRepository.query(`select * from resultado where id = ${id}`)
    console.log(JSON.stringify(resultado));
    return `${JSON.stringify(resultado)}`;
  }

  update(id: number, updateResultadoDto: UpdateResultadoDto) {
    return `This action updates a #${id} resultado`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultado`;
  }
}
