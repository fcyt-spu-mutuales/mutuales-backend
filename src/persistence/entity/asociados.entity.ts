import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Asociados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  activos: number;
  
  @Column({
    nullable: true
  })
  participantes: number;
  
  @Column({
    nullable: true
  })
  adherentes: number;

  @Column({
    nullable: true
  })
  honorarios: number;
  
  @Column({
    nullable: true
  })
  vitalicios: number;

  @Column({
    nullable: true
  })
  mujeres: number;

  @Column({
    nullable: true
  })
  hombres: number;

  @Column({
    nullable: true
  })
  menores21: number;

  @Column({
    nullable: true
  })
  entre21y40: number;

  @Column({
    nullable: true
  })
  mayores40: number;

  @Column({
    nullable: true
  })
  ultimosTesMeses: number;

  @Column({
    nullable: true
  })
  incidenContextosPoliticos: boolean;

  @Column({
    nullable: true
  })
  acontecimiento: string;

  @OneToOne(type => Mutual, mutual => mutual.asociados)
  @JoinColumn()
  mutual: Mutual;
}
