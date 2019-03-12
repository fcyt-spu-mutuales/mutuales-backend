import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { User } from './user.entity';

export enum EntityType {
  MUTUAL = 'mutual',
  COOPERATIVE = 'cooperative'
}

@Entity()
export class Cooperative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => City, city => city.cooperatives, {
    nullable: true
  })
  city: City;

  @Column()
  address: string;

  @Column({
    nullable: true
  })
  phoneNumner: string;

  @Column({
    nullable: true
  })
  email: string;

  @Column({
    nullable: true
  })
  creationDate: Date;

  @Column({
    nullable: true
  })
  postalCode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  enrollment: number;

  @Column('simple-array', {
    nullable: true
  })
  workingDays: string[];

  @Column({
    type: 'enum',
    enum: EntityType,
    default: EntityType.COOPERATIVE,
    nullable: true
  })
  type: EntityType;


  @OneToMany(type => User, user => user.cooperative, {
    nullable: true
  })
  users: User[];

}
