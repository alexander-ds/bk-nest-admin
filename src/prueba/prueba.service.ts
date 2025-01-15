import { Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { Prueba } from './entities/prueba.entity'

@Injectable()
export class PruebaService {

  constructor(
    @InjectRepository(Prueba)
    private readonly pruebaRepository: Repository<Prueba>,
  ){}

  async create(createPruebaDto: CreatePruebaDto) {
    try {
      await this.pruebaRepository.query(
        `INSERT INTO prueba (ID, Nombre, Anio) values (${createPruebaDto.id},${createPruebaDto.nombre},${createPruebaDto.anio})`,
      );
    } catch (e) {
      console.log(e.message);
      return e.message;
    }
    return 'Registro creado con exito \n' + JSON.stringify(createPruebaDto);
  }

  async findAll() {
    const pruebas = await this.pruebaRepository.query('select * from prueba')
    console.log(JSON.stringify(pruebas));
    return `${JSON.stringify(pruebas)}`;
  }

  async findOne(id: number) {
    const prueba = await this.pruebaRepository.query(`select * from prueba where id = ${id}`)
    console.log(JSON.stringify(prueba));
    return `${JSON.stringify(prueba)}`;
  }

  update(id: number, updatePruebaDto: UpdatePruebaDto) {
    return `This action updates a #${id} prueba`;
  }
  // TODO : 
  remove(id: number) {
    return `This action removes a #${id} prueba`;
  }
}
