import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Department } from "./department.entity";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;


    @ManyToOne(type => Department, department => department.cities)
    department: Department;


}