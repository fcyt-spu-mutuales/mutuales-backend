import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Servicios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  demandaUltimosAnios: string;
  
  @Column({
    nullable: true
  })
  inconvenientes: string;
  
  @Column({
    nullable: true
  })
  tipoInconvenientes: string;

  @Column({
    nullable: true
  })
  demandaInsatisfecha: string;
  
  @OneToOne(type => Mutual, mutual => mutual.servicios)
  @JoinColumn()
  mutual: Mutual;
}
