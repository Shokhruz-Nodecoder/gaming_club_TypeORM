import express, { Application }  from "express";
import { AppSource } from "./database";
import config from "../config/index";
import "reflect-metadata"
import routes from "./routes";
const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes)
const bootsrapt = async()=>{
    await AppSource.initialize();

    app.listen(config.PORT,()=>{
        console.log("listening on port " + config.PORT);
    })
}
bootsrapt();