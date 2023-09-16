import express from "express";
import cors from 'cors';
import { config } from 'dotenv';
config();

const port = process.env.port;
const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send({message: "It's working"})
})


app.listen(port, () => {
    console.log("live on port " + port)
})