import { Booking } from './../entities/booking.entities';
import { Computer } from './../entities/computer.entities';
import { Request, Response } from "express";
import { AppSource } from "../database";

export const GetComputers = async (req: Request, res: Response) => {
  try {
    const computer: Computer[] = await AppSource.getRepository(Computer).find({
      where: {
        is_available: true,
      },
    });

    res.status(201).json({ message: "Success", data: computer });
  } catch (error) {}
};

export const useComputers = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const bookComputer:Booking | null = await AppSource.getRepository(Booking).findOne({
            where: {
                id: +id,
            },
        })
        if(!bookComputer){
            return res.status(404).json({ message: "Not found"})
        }else{
        const time = bookComputer.created_at + (60000);
        const currentTime = Date.now() 
        if(time< currentTime) {
            res.status(200).json({ message:"Vaqtingiz tugadi"})
        }else{
            res.status(200).json({message:`Sizning vaqtingiz ${Math.floor(currentTime - time)/60000} minut qoldi`})
        }}
    } catch (error) {
        
    }

}

export const CreateComputer = async (req: Request, res: Response) => {
    console.log(req.body);
  try {
    const { name } = req.body;

    const computer = await AppSource.getRepository(Computer).create({name})

    res.status(201).json({ message: "Success", data: computer });
  } catch (error) {}
};
