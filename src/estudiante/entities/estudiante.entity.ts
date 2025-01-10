import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Estudiante')
export class Estudiante  {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Nombres:string;

    @Column()
    Grado:string;

    @Column()
    Salon:string;

    // @OneToMany(()=>Resultado,(resultado)=>resultado.IDEstudiante)
    // resultados:Resultado[];

}