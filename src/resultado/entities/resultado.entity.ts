import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Pregunta } from 'src/pregunta/entities/pregunta.entity';
import { Prueba } from 'src/prueba/entities/prueba.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Resultado')
export class Resultado {
    @PrimaryGeneratedColumn()
    ID:string;

    // @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.ID)
    // @JoinColumn({ name: "IDEstudiante" })
    // IDEstudiante:Estudiante;

    // @ManyToOne(()=>Prueba,(prueba)=>prueba.ID)
    // @JoinColumn({ name: "IDPrueba" })
    // IDPrueba:Prueba;

    // @ManyToOne(()=>Pregunta,(pregunta)=>pregunta.ID)
    // @JoinColumn({ name: "IDPregunta" })
    // IDPregunta:Pregunta;
}
