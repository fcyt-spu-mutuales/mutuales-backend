import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Directivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  personas: number;
  
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
  vigencia: number;
  
  @Column({
    nullable: true
  })
  menores40: number;

  @Column({
    nullable: true
  })
  inicio: Date;

  @Column({
    nullable: true
  })
  fin: Date;

  @Column({
    nullable: true
  })
  modalidadEleccion: string;

  @OneToOne(type => Mutual, mutual => mutual.directivo)
  @JoinColumn()
  mutual: Mutual;
}
