import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Provincia } from "./provincia.entity";
import { Localidad } from "./localidad.entity";


@Entity()
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;

    @ManyToOne(type => Provincia, provincia => provincia.departamentos)
    provincia: Provincia;

    @OneToMany(type => Localidad, localidad => localidad.departamento)
    localidades: Localidad[];
}