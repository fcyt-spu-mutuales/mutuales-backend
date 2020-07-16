import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Localidad } from './localidad.entity';
import { User } from './user.entity';
import { Asociados } from './asociados.entity';
import { Directivo } from './directivo.entity';
import { Empleados } from './empleados.entity';
import { Instrumentos } from './instrumentos.entity';
import { Comunicacion } from './comunicacion.entity';
import { Planes } from './planes.entity';
import { Economica } from './economica.entity';
import { Servicios } from './servicios.entity';

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

  @OneToOne(type => Asociados, asociados => asociados.mutual)
  asociados: Asociados;

  @OneToOne(type => Directivo, directivo => directivo.mutual)
  directivo: Directivo;

  @OneToOne(type => Empleados, empleados => empleados.mutual)
  empleados: Empleados;

  @OneToOne(type => Instrumentos, instrumentos => instrumentos.mutual)
  instrumentos: Instrumentos;

  @OneToOne(type => Comunicacion, comunicacion => comunicacion.mutual)
  comunicacion: Comunicacion;

  @OneToOne(type => Planes, planes => planes.mutual)
  planes: Planes;

  @OneToOne(type => Economica, economica => economica.mutual)
  economica: Economica;

  @OneToOne(type => Servicios, servicios => servicios.mutual)
  servicios: Servicios;
}
