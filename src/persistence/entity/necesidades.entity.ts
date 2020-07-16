import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Necesidades {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  tieneProfesionales: boolean;
  
  @Column({
    nullable: true
  })
  cantidadProfesionales: number;
  
  @Column({
    nullable: true
  })
  cantidadTecnicos: number;

  @Column({
    nullable: true
  })
  serviciosTerciariza: string;

  @Column({
    nullable: true
  })
  disciplinasTerciariza: string;

  @Column({
    nullable: true
  })
  realizaCapacitaciones: boolean;

  @Column({
    nullable: true
  })
  realizaCapacitacionesMutual: boolean;

  @Column({
    nullable: true
  })
  formaRealizacion: string;

  @Column({
    nullable: true
  })
  capacidadesNecesarias: string;

  @Column({
    nullable: true
  })
  conoceCarrerasMutuales: boolean;

  @Column({
    nullable: true
  })
  propuestasConjuntas: boolean;

  @Column({
    nullable: true
  })
  sugerenciasPropuestas: string;

  @Column({
    nullable: true
  })
  sugerenciaTemasAsignaturas: string;

  @Column({
    nullable: true
  })
  cursarianEmpleados: boolean;

  @Column({
    nullable: true
  })
  capacidadEmpleados1: string;

  @Column({
    nullable: true
  })
  capacidadEmpleados2: string;

  @Column({
    nullable: true
  })
  capacidadEmpleados3: string;

  @Column({
    nullable: true
  })
  capacidadDirectivos1: string;

  @Column({
    nullable: true
  })
  capacidadDirectivos2: string;

  @Column({
    nullable: true
  })
  capacidadDirectivos3: string;

  @OneToOne(type => Mutual, mutual => mutual.necesidades)
  @JoinColumn()
  mutual: Mutual;
}
