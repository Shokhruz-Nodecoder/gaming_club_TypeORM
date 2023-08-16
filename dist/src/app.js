"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const index_1 = __importDefault(require("../config/index"));
require("reflect-metadata");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
const bootsrapt = async () => {
    await database_1.AppSource.initialize();
    app.listen(index_1.default.PORT, () => {
        console.log("listening on port " + index_1.default.PORT);
    });
};
bootsrapt();
