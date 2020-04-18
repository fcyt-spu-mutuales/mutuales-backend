import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Departamento } from './departamento.entity';

@Entity()
export class Provincia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => Departamento, departamento => departamento.provincia)
  departamentos: Departamento[]
}
