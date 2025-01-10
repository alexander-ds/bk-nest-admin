import { Pregunta } from 'src/pregunta/entities/pregunta.entity';
import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Prueba')
export class Prueba {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Nombre:string;

    @Column()
    Anio:Date;

    @OneToMany(()=>Resultado,(resultado)=>resultado.IDPrueba)
    resultados:Resultado[];

    @OneToMany(()=>Pregunta,(pregunta)=>pregunta.IDPrueba)
    pregunta:Pregunta[];
}