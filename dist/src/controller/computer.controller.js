"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputer = exports.useComputers = exports.GetComputers = void 0;
const booking_entities_1 = require("./../entities/booking.entities");
const computer_entities_1 = require("./../entities/computer.entities");
const database_1 = require("../database");
const GetComputers = async (req, res) => {
    try {
        const computer = await database_1.AppSource.getRepository(computer_entities_1.Computer).find({
            where: {
                is_available: true,
            },
        });
        res.status(201).json({ message: "Success", data: computer });
    }
    catch (error) { }
};
exports.GetComputers = GetComputers;
const useComputers = async (req, res) => {
    try {
        const id = req.params.id;
        const bookComputer = await database_1.AppSource.getRepository(booking_entities_1.Booking).findOne({
            where: {
                id: +id,
            },
        });
        if (!bookComputer) {
            return res.status(404).json({ message: "Not found" });
        }
        else {
            const time = bookComputer.created_at + (60000);
            const currentTime = Date.now();
            if (time < currentTime) {
                res.status(200).json({ message: "Vaqtingiz tugadi" });
            }
            else {
                res.status(200).json({ message: `Sizning vaqtingiz ${Math.floor(currentTime - time) / 60000} minut qoldi` });
            }
        }
    }
    catch (error) {
    }
};
exports.useComputers = useComputers;
const CreateComputer = async (req, res) => {
    console.log(req.body);
    try {
        const { name } = req.body;
        const computer = await database_1.AppSource.getRepository(computer_entities_1.Computer).create({ name });
        res.status(201).json({ message: "Success", data: computer });
    }
    catch (error) { }
};
exports.CreateComputer = CreateComputer;
