import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import router from "./routes/user-route.js";
import workoutRouter from "./routes/workout-route.js";
import { config } from 'dotenv';
config();

const port = process.env.port;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/user", router)
app.use("/workout", workoutRouter)

mongoose.connect(process.env.MONGO_URL)
.then(() => app.listen(port, () => {
    console.log("Live on port " + port)
})).catch((err) => console.log(err))