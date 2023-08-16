import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { Booking } from "./booking.entities";

@Entity()
export class Computer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  is_available!: boolean;

  @OneToMany(() => Booking, (booking) => booking.computer)
  @JoinTable()
  bookings!: Booking[];
}
