"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSource = void 0;
const typeorm_1 = require("typeorm");
const booking_entities_1 = require("../entities/booking.entities");
const computer_entities_1 = require("../entities/computer.entities");
exports.AppSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgres://postgres:Azizjon.0107@localhost:5432/gameclub",
    entities: [booking_entities_1.Booking, computer_entities_1.Computer]
});
