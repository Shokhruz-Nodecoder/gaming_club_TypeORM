import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Computer } from "./computer.entities";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({
    type: "integer",
    default: () => Date.now(),
  })
  created_at!: number;

 
 @ManyToOne( () => Computer, (computer)=>computer.bookings)
 computer!:number;

 @Column()
 time_count!: number;
}


