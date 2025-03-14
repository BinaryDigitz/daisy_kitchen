import mongoose from "mongoose";
import { app } from '../index.js';
import { MONGODB_URI, PORT } from '../config/env.js'

export function loadDatabase() {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('Connected to MONGODB database');
            app.listen(PORT, () => {
                console.log(`Daisy kitchen is running at http://localhost:${PORT}`);

            })

        })
        .catch(() => {
            console.log('Failed to connect to MONGODB database...');

        })

}