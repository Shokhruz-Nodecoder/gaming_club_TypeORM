"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBooking = exports.GetBookings = void 0;
const booking_entities_1 = require("./../entities/booking.entities");
const database_1 = require("../database");
const computer_entities_1 = require("../entities/computer.entities");
const GetBookings = async (req, res) => {
    try {
        const bookings = await database_1.AppSource.getRepository(booking_entities_1.Booking).find({
        //   where: {
        //     is_available: true,
        //   },
        });
        res.status(201).json({ message: "Success", data: bookings });
    }
    catch (error) { }
};
exports.GetBookings = GetBookings;
const CreateBooking = async (req, res) => {
    try {
        const name = req.body.name;
        const computer = await database_1.AppSource.getRepository(booking_entities_1.Booking).create({ name });
        res.status(201).json({ message: "Success", data: computer_entities_1.Computer });
    }
    catch (error) { }
};
exports.CreateBooking = CreateBooking;
