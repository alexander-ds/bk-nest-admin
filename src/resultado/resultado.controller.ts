import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@Controller('resultado')
export class ResultadoController {
  constructor(private readonly resultadoService: ResultadoService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @Get()
  findAll() {
    return this.resultadoService.findAll();
  }

  @Get('/pregunta/:id')
  findOneQuestion(@Param('id') id: string) {
    return this.resultadoService.findOneQuestion(+id);
  }

  @Get('/prueba/:id')
  findOneTest(@Param('id') id: string) {
    return this.resultadoService.findOneTest(+id);
  }
  @Get('/estudiante/:id')
  findOneStudent(@Param('id') id: string) {
    return this.resultadoService.findOneStudent(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadoDto: UpdateResultadoDto) {
    return this.resultadoService.update(+id, updateResultadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultadoService.remove(+id);
  }
}
