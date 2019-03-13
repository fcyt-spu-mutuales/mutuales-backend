import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Cooperative } from './cooperative.entity';

export enum UserType {
  MOBILE = 'mobile',
  ADMIN = 'admin',
  MUTUAL = 'mutual'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    default: false
  })
  enabled: boolean;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.MOBILE,
    nullable: false
  })
  type: UserType;

  @ManyToOne(type => Cooperative, cooperative => cooperative.users)
  cooperative: Cooperative
}
