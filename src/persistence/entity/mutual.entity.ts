import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Localidad } from './localidad.entity';
import { User } from './user.entity';

export enum TipoMutal {
  MUTUAL = 'mutual',
  FEDERACION = 'federacion'
}

export enum HorarioAtencion {
  MAÑANA = 'mañana',
  TARDE = 'tarde',
  MAÑANANA_TARDE = 'mañana-tarde',
}

export enum DiasAtencion {
  LUNES_VIERNES = 'lunes-viernes',
  LUNES_SABADO = 'lunes-sabado',
}

@Entity()
export class Mutual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  cuit: string;
  
  @Column()
  nombre: string;

  @Column({
    type: 'enum',
    enum: TipoMutal,
    //default: TipoMutal.MUTUAL,
    nullable: true
  })
  tipo: TipoMutal;

  @Column({
    nullable: true
  })
  estado: boolean;
  
  @ManyToOne(type => Localidad, localidad => localidad.mutuales, {
    nullable: true
  })
  localidad: Localidad;

  @Column()
  direccion: string;

  @Column({
    nullable: true
  })
  latitud: string;

  @Column({
    nullable: true
  })
  longitud: string;

  @Column({
    nullable: true
  })
  telefono: string;

  @Column({
    nullable: true
  })
  email: string;

  @Column({
    nullable: true
  })
  fechaInscripcion: Date;

  @Column({
    nullable: true
  })
  anioFundacion: number;

  @Column({
    nullable: true
  })
  objetoCreacion: string;

  @Column({
    nullable: true
  })
  objetoFuncionamiento: string;

  @Column({
    type: 'enum',
    enum: DiasAtencion,
    nullable: true
  })
  dias: DiasAtencion;

  @Column({
    type: 'enum',
    enum: HorarioAtencion,
    nullable: true
  })
  horarios: HorarioAtencion;
  
  @Column({
    nullable: true
  })
  cantidadFiliales: number;
  
  @Column({
    nullable: true
  })
  cantidadProvincia: number;

  @Column({
    nullable: true
  })
  cantidadFueraProvincia: number;

  @Column({
    nullable: true
  })
  localidadesFiliales: string;

  @Column({
    nullable: true
  })
  provinciasFiliales: string;

  @Column({
    nullable: true
  })
  usaRedSocial: boolean;

  @Column({
    nullable: true
  })
  respondeRelevamiento: string;

  /*@Column('simple-array', {
    nullable: true
  })
  workingDays: string[];
  */
 
  @OneToMany(type => User, user => user.mutual, {
    nullable: true
  })
  users: User[];
}
