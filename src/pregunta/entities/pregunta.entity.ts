import { Prueba } from 'src/prueba/entities/prueba.entity';
import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Pregunta')
export class Pregunta {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Respuesta:string;

    @Column()
    Orden:string;

    // @OneToMany(()=>Resultado,(resultado)=>resultado.IDPregunta)
    // resultados:Resultado[];

    // @ManyToOne(()=>Prueba,(prueba) => prueba.ID)
    // @JoinColumn({ name: "IDPrueba" })
    // IDPrueba:Prueba;
}
