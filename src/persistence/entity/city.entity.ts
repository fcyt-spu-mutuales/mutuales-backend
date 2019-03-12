import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Department } from "./department.entity";
import { Cooperative } from "./cooperative.entity";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @ManyToOne(type => Department, department => department.cities)
    department: Department;

    @OneToMany(type => Cooperative, cooperative => cooperative.city)
    cooperatives: Cooperative[]


}