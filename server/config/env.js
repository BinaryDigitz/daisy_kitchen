import { config } from "dotenv";

config({ path: `.env.${ process.env.NODE_ENV  || ' development'}.local`})

export const { PORT, JWT_SECRET, MONGODB_URI, NODE_ENV} = process.env