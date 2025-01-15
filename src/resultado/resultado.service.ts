import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
  ) {}

  // TODO: HAcer manejo de errores
  async create(createResultadoDto: CreateResultadoDto) {
    try {
      await this.resultadoRepository.query(
        `INSERT INTO Resultado (ID, IDEstudiante, IDPrueba, IDPregunta) values (${createResultadoDto.id},${createResultadoDto.idEstudiante},${createResultadoDto.idPrueba},${createResultadoDto.idPregunta})`,
      );
    } catch (e) {
      console.log(e.message);
      return e.message;
    }
    return 'Registro creado con exito \n' + JSON.stringify(createResultadoDto);
  }

  async findAll() {
    const resultados = await this.resultadoRepository.query(
      'select r.id as idResultado , e.nombres , e.grado , pr.nombre as prueba , pr.anio as anioPrueba ,   CASE WHEN p.respuesta = p.orden THEN 1  ELSE 0  END  AS Resultado from resultado r inner join estudiante e on r.idEstudiante = e.id inner join pregunta p on r.idPregunta = p.id inner join prueba pr on r.idPrueba = pr.id',
    );
    console.log(JSON.stringify(resultados));
    return `${JSON.stringify(resultados)}`;
  }

  async findOneQuestion(id: number) {
    const resultado = await this.resultadoRepository.query(
      `select r.id as idResultado , e.nombres , e.grado , pr.nombre as prueba , pr.anio as anioPrueba ,   CASE WHEN p.respuesta = p.orden THEN 1  ELSE 0  END  AS Resultado from resultado r inner join estudiante e on r.idEstudiante = e.id inner join pregunta p on r.idPregunta = p.id inner join prueba pr on r.idPrueba = pr.id where r.id = ${id}`,
    );
    console.log(JSON.stringify(resultado));
    return `${JSON.stringify(resultado)}`;
  }

  async findOneTest(id: number) {
    const resultado = await this.resultadoRepository.query(
      `select r.id as idResultado , e.nombres , e.grado , pr.nombre as prueba , pr.anio as anioPrueba ,   CASE WHEN p.respuesta = p.orden THEN 1  ELSE 0  END  AS Resultado from resultado r inner join estudiante e on r.idEstudiante = e.id inner join pregunta p on r.idPregunta = p.id inner join prueba pr on r.idPrueba = pr.id where pr.id = ${id} order by e.nombres`,
    );
    console.log(JSON.stringify(resultado));
    return `${JSON.stringify(resultado)}`;
  }

  async findOneStudent(id: number) {
    const resultado = await this.resultadoRepository.query(
      `select r.id as idResultado , e.nombres , e.grado , pr.nombre as prueba , pr.anio as anioPrueba ,   CASE WHEN p.respuesta = p.orden THEN 1  ELSE 0  END  AS Resultado from resultado r inner join estudiante e on r.idEstudiante = e.id inner join pregunta p on r.idPregunta = p.id inner join prueba pr on r.idPrueba = pr.id where e.id = ${id}`,
    );
    console.log(JSON.stringify(resultado));
    return `${JSON.stringify(resultado)}`;
  }
  
  async update(id: number, updateResultadoDto: UpdateResultadoDto) {

    const resultado = await this.resultadoRepository.query(`select * from resultado where id = ${id}`);

    const idEstudiante = updateResultadoDto.idEstudiante ? updateResultadoDto.idEstudiante:resultado.idEstudiante;
    const idPrueba = updateResultadoDto.idPrueba ? updateResultadoDto.idPrueba:resultado.idPrueba;
    const idPregunta = updateResultadoDto.idPregunta ? updateResultadoDto.idPregunta:resultado.idPregunta;

    console.log(`idEstudiante = ${idEstudiante}, idPrueba = ${idPrueba} , idPregunta = ${idPregunta}`);

    await this.resultadoRepository.query(`UPDATE resultado SET idEstudiante = ${idEstudiante}, idPrueba = ${idPrueba} , idPregunta = ${idPregunta} WHERE id = ${id};`);
    return `Registro ${id} actualizado con valores: \n idEstudiante = ${idEstudiante}, idPrueba = ${idPrueba} , idPregunta = ${idPregunta} `;
  }

  remove(id: number) {
    return `This action removes a #${id} resultado`;
  }
}
