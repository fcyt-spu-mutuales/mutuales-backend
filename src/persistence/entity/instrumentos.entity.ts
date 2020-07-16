import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Mutual } from './mutual.entity';

@Entity()
export class Instrumentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  divisionFuncional: boolean;
  
  @Column({
    nullable: true
  })
  areas: string;
  
  @Column({
    nullable: true
  })
  reglamentoInterno: boolean;

  @Column({
    nullable: true
  })
  actaComisionDirectiva: boolean;

  @Column({
    nullable: true
  })
  actaJuntaFiscalizadora: boolean;
  
  @Column({
    nullable: true
  })
  actaAsamblea: boolean;

  @Column({
    nullable: true
  })
  padronAsociados: boolean;

  @Column({
    nullable: true
  })
  balance: boolean;

  @Column({
    nullable: true
  })
  balanceSocial: boolean;

  @Column({
    nullable: true
  })
  infoIPCYMER: boolean;

  @Column({
    nullable: true
  })
  infoINAES: boolean;

  @Column({
    nullable: true
  })
  infoAFIP: boolean;

  @Column({
    nullable: true
  })
  infoUIF: boolean;

  @Column({
    nullable: true
  })
  personalEspecificoEmitir: boolean;

  @Column({
    nullable: true
  })
  cargaLaboralFuncionPersonal: string;

  @Column({
    nullable: true
  })
  equipoInformatico: boolean;

  @OneToOne(type => Mutual, mutual => mutual.instrumentos)
  @JoinColumn()
  mutual: Mutual;
}
