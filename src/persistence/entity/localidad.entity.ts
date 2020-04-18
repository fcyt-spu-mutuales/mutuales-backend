import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Departamento } from "./departamento.entity";
import { Mutual } from "./mutual.entity";

@Entity()
export class Localidad {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;

    @Column({
        nullable: true
      })
    codigoPostal: string;

    @ManyToOne(type => Departamento, departamento => departamento.localidades)
    departamento: Departamento;

    @OneToMany(type => Mutual, mutual => mutual.localidad)
    mutuales: Mutual[]
}