import { DataSource } from "typeorm";
import { Booking } from "../entities/booking.entities";
import { Computer } from "../entities/computer.entities";

export const AppSource = new DataSource({
    type: "postgres",
    url: "postgres://postgres:Azizjon.0107@localhost:5432/gameclub",
    entities: [Booking, Computer]
})
