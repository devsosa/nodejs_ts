import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity('user')
export class UserEntity {
  //@PrimaryGeneratedColumn('uuid') id!: string;

  @Column('text') user!: string;

  @Column('text') name!: string;

  @Column('text') lastname!: string;

  @Column({ nullable: true }) jobPosition!: string;

  @Column('number') numberPhone!: number;

  //@CreateDateColumn() createdAt!: Date;

  //@UpdateDateColumn() updatedAt!: Date;
}