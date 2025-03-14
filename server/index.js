import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { JWT_SECRET } from "./config/env.js";
import cors from 'cors'
import { loadDatabase } from "./utils/loadDatabase.js";
import { errorHandler }  from './middlewares/erroHandle.js'

// Close the app if no jwt key is provided
if(!JWT_SECRET){
    console.log('FATAL ERROR: JWT PRIVATE KEY NOT DEFINED');
    process.exit(1);
}
// Terminate the process if an ancaught error is found
process.on('oncaughtException', (ex) =>{
    console.log('UNCAUGHT EX');
    console.log(ex.message, extendOwn);
})
// Accepted http request
const corsOrigin ={
    origin: ['http://localhost:5173'],
    optionSuccessStatus: 200
}
export const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors(corsOrigin))
app.use(cookieParser())
app.use(morgan('tiny'))

// ERROR HANDLER
app.use(errorHandler)
loadDatabase()