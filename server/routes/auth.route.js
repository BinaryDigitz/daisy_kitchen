
import { Router } from "express";
import { signup, login, google } from '../controllers/authControlers.js'

const authRouter = Router()

authRouter.post('/signup', signup)

authRouter.post('/login', login)

authRouter.post('/google', google)




export default authRouter