import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

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

  @ManyToOne(type => Mutual, mutual => mutual.users)
  mutual: Mutual
}
