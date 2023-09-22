import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
import router from "./routes/user-route.js";
import workoutRouter from "./routes/workout-route.js";
import { config } from 'dotenv';
config();

const port = process.env.port;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
    origin: ["http://localhost:3000",
    "https://mern-my-gym.onrender.com",
],
}))


app.use(express.json())

app.use("/user", router)
app.use("/workout", workoutRouter)
app.get("*", (req, res)=>{res.send({message:"404 not found"})})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
mongoose.connect(process.env.MONGO_URL)
.then(() => app.listen(port, () => {
    console.log("Live on port " + port)
})).catch((err) => console.log(err))