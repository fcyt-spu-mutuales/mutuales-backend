import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum EntityType {
  MUTUAL = "mutual",
  COOPERATIVE = "cooperative"
}


@Entity()
export class Cooperative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: string;

  @Column()
  address: string;

  @Column()
  phoneNumner: string;

  @Column()
  email: string;

  @Column()
  creationDate: Date;

  @Column()
  postalCode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  enrollment: number;

  @Column("simple-array")
  workingDays: string[];

  @Column({
    type: "enum",
    enum: EntityType,
    default: EntityType.COOPERATIVE
  })
  type: EntityType
}
