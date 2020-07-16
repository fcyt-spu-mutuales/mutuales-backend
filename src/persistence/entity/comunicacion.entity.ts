import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Comunicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  web: boolean;
  
  @Column({
    nullable: true
  })
  direccionWeb: string;
  
  @Column({
    nullable: true
  })
  facebook: boolean;

  @Column({
    nullable: true
  })
  twitter: boolean;

  @Column({
    nullable: true
  })
  instagram: boolean;
  
  @Column({
    nullable: true
  })
  otraRed: string;

  @Column({
    nullable: true
  })
  boletinComuniacion: boolean;

  @Column({
    nullable: true
  })
  remiteBoletinEmail: boolean;

  @Column({
    nullable: true
  })
  remiteBoletinReuniones: boolean;

  @Column({
    nullable: true
  })
  remiteBoletinDomicilio: boolean;

  @Column({
    nullable: true
  })
  areaPrensa: boolean;

  @Column({
    nullable: true
  })
  actividadesBalanceSocial: string;

  @OneToOne(type => Mutual, mutual => mutual.comunicacion)
  @JoinColumn()
  mutual: Mutual;
}
