import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Empleados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  cantidad: number;
  
  @Column({
    nullable: true
  })
  contratados: number;
  
  @Column({
    nullable: true
  })
  hombres: number;

  @Column({
    nullable: true
  })
  mujeres: number;

  @Column({
    nullable: true
  })
  antiguedadPromedio: number;
  
  @Column({
    nullable: true
  })
  sueldoPromedio: number;

  @Column({
    nullable: true
  })
  horasSemanales: number;

  @Column({
    nullable: true
  })
  gremio: string;

  @Column({
    nullable: true
  })
  cantidadUsanPC: number;

  @Column({
    nullable: true
  })
  poseeART: boolean;

  @Column({
    nullable: true
  })
  nombreART: string;

  @Column({
    nullable: true
  })
  capacitacionesART: boolean;

  @OneToOne(type => Mutual, mutual => mutual.empleados)
  @JoinColumn()
  mutual: Mutual;
}
