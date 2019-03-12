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

  @Column({
    nullable: true
  })
  city: number;

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

  @Column("simple-array", {
    nullable: true
  })
  workingDays: string[];

  @Column({
    type: "enum",
    enum: EntityType,
    default: EntityType.COOPERATIVE,
    nullable: true
  })
  type: EntityType
}
