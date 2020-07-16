import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Economica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  necesidadesActuales: string;
  
  @Column({
    nullable: true
  })
  fortalezas: string;
  
  @Column({
    nullable: true
  })
  amenazas: string;

  @Column({
    nullable: true
  })
  asociaOtrasMutuales: boolean;
  
  @Column({
    nullable: true
  })
  asociaRedSolidaria: string;

  @Column({
    nullable: true
  })
  asociaAmbito: string;

  @Column({
    nullable: true
  })
  tributosMunicipales: string;

  @Column({
    nullable: true
  })
  tributaOtroNivel: string;

  @Column({
    nullable: true
  })
  nivelGubernamental: string;

  @Column({
    nullable: true
  })
  capitalizoFondoComun: string;

  @Column({
    nullable: true
  })
  presentaMecanismo: string;

  @Column({
    nullable: true
  })
  cualMecanismo: string;

  @Column({
    nullable: true
  })
  porQueNoMecanismo: string;

  @Column({
    nullable: true
  })
  ingresos2018: number;

  @Column({
    nullable: true
  })
  egresos2018: number;

  @OneToOne(type => Mutual, mutual => mutual.economica)
  @JoinColumn()
  mutual: Mutual;
}
