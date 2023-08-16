"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const computer_controller_1 = require("../controller/computer.controller");
exports.router = (0, express_1.Router)();
exports.router.get('/computers', computer_controller_1.GetComputers);
exports.router.post('/computers', computer_controller_1.CreateComputer);
