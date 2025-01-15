import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Estudiante } from './entities/estudiante.entity'

@Injectable()
export class EstudianteService {

  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ){}

  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      await this.estudianteRepository.query(
        `INSERT INTO Estudiante (ID, Nombres, Grado, Salon) values (${createEstudianteDto.id},${createEstudianteDto.nombre},${createEstudianteDto.grado},${createEstudianteDto.salon})`,
      );
    } catch (e) {
      console.log(e.message);
      return e.message;
    }
    return 'Registro creado con exito \n' + JSON.stringify(createEstudianteDto);
  }

  async findAll() {
    const estudiantes = await this.estudianteRepository.query('select * from estudiante')
    console.log(JSON.stringify(estudiantes));
    return `${JSON.stringify(estudiantes)}`;
  }

  async findOne(id: number) {
    const estudiante = await this.estudianteRepository.query(`select * from estudiante where id = ${id}`)
    console.log(JSON.stringify(estudiante));
    return `${JSON.stringify(estudiante)}`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
