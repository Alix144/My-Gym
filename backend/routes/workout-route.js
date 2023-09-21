import express from "express";
import { getAllWorkouts, addWorkout, updateWorkout, getById, deleteWorkout, getByUserId } from "../controllers/workout-controller.js";
const workoutRouter = express.Router();

workoutRouter.get("/", getAllWorkouts)
workoutRouter.post("/add", addWorkout)
workoutRouter.put("/update/:id", updateWorkout)
workoutRouter.get("/:id", getById)
workoutRouter.delete("/:id", deleteWorkout)
workoutRouter.get("/user/:id", getByUserId)
workoutRouter.get("/*", (req, res)=>{res.send({message:"404 not found"})})

export default workoutRouter;