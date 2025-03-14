
import { Router } from "express";
import { asyncMiddleware } from "../middlewares/asyncMiddleware.js";
import { signup } from "../controllers/auth.controllers.js";


const authRouter = Router()

authRouter.post('/signup', asyncMiddleware(signup))




export default authRouter