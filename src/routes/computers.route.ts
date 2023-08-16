import {Router} from "express"
import { CreateComputer, GetComputers } from "../controller/computer.controller";

export const router = Router();

router.get('/computers', GetComputers )
router.post('/computers', CreateComputer)