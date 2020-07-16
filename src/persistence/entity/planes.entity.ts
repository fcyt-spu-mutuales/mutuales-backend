import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Planes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  elaboraPlanes: boolean;
  
  @Column({
    nullable: true
  })
  ejemploPlan: string;

  @Column({
    nullable: true
  })
  descripcionEjemploPlan: string;
  
  @Column({
    nullable: true
  })
  articulaOtrosActores: boolean;

  @Column({
    nullable: true
  })
  trabajaEstado: boolean;

  @Column({
    nullable: true
  })
  trabajaEmpresas: boolean;
  
  @Column({
    nullable: true
  })
  trabajaUniversidades: boolean;

  @Column({
    nullable: true
  })
  trabajaONG: boolean;

  @Column({
    nullable: true
  })
  trabajaOtro: string;

  @Column({
    nullable: true
  })
  recurreOrgInternacionales: boolean;

  @Column({
    nullable: true
  })
  cualesOrgInternacionales: string;

  @Column({
    nullable: true
  })
  motivoRecurre: string;

  @OneToOne(type => Mutual, mutual => mutual.planes)
  @JoinColumn()
  mutual: Mutual;
}
