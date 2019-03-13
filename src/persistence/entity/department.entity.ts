import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { State } from "./state.entity";
import { City } from "./city.entity";


@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @ManyToOne(type => State, state => state.departments)
    state: State;

    @OneToMany(type => City, city => city.department)
    cities: City[];
}