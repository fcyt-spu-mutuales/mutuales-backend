import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Actividad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  tipo: string;
  
  @Column({
    nullable: true
  })
  actividadRealizada: string;
  
  @Column({
    nullable: true
  })
  descripcion: string;

  @ManyToOne(type => Mutual, mutual => mutual.actividades)
  mutual: Mutual;
}
