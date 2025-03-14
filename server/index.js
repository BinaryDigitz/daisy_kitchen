import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'

export const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('tiny'))