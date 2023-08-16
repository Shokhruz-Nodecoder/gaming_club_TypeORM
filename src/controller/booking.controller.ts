import { Booking } from './../entities/booking.entities';
import { Request, Response } from "express";
import { AppSource } from "../database";
import { Computer } from "../entities/computer.entities";

export const GetBookings = async (req: any, res: Response) => {
  try {
    const bookings: Booking[] = await AppSource.getRepository(Booking).find({
    //   where: {
    //     is_available: true,
    //   },
    });

    res.status(201).json({ message: "Success", data: bookings });
  } catch (error) {}
};

export const CreateBooking = async (req: any, res: Response) => {
  try {
    const name: string = req.body.name;

    const computer = await AppSource.getRepository(Booking).create({name})

    res.status(201).json({ message: "Success", data: Computer });
  } catch (error) {}
};
