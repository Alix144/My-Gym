import Workout from "../models/WorkoutModel.js";
import User from "../models/UsersModel.js";
import mongoose from "mongoose";

export const getAllWorkouts = async(req, res, next) => {
    let workouts;
    try{
        workouts = await Workout.find().populate('user');
    }catch(err){
        return console.log(err)
    }

    if(!workouts){
        return res.status(404).json({message: "No Workouts Found"})
    }

    return res.status(200).json({workouts})
}

export const addWorkout = async(req, res, next) => {
    const {name, load, rep, set, user} = req.body;

    let existingUser;
    try{
        existingUser = await User.findById(user)
    }catch(err){
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "Unable to Find User by This ID"})
    }

    const workout = new Workout({name, load, rep, set, user})
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await workout.save({session})

        existingUser.workout.push(workout)
        await existingUser.save({session})

        await session.commitTransaction();
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "err :)"})
    }

    return res.status(200).json({workout})
}

export const updateWorkout = async(req, res, next) => {
    const {name, load, rep, set} = req.body;
    const workoutId = req.params.id;
    let workout;
    try{
        workout = await Workout.findByIdAndUpdate(workoutId,{
            name,
            load,
            rep,
            set,
        })
    }catch(err){
        return console.log(err)
    }

    if(!workout){
        return res.status(500).json({message: "Unable To Update The workout"})
    }

    return res.status(200).json({workout})

}

export const getById = async(req, res, next) => {
    const id = req.params.id;
    let workout;
    try{
        workout = await Workout.findById(id)
    }catch(err){
        return res.status(400).json({err})
    }

    if(!workout){
        return res.status(404).json({message: "No Workout Found"});
    }

    return res.status(200).json({workout})
}

export const deleteWorkout = async(req, res, next) => {
    const id = req.params.id;
    let workout;
    try{
        workout = await Workout.findByIdAndRemove(id).populate('user');
        await workout.user.workout.pull(workout)
        await workout.user.save();
    }catch(err){
        return console.log(err)
    }

    if(!workout){
        return res.status(500).json({message: "Unable to Delete"});
    }

    return res.status(200).json({message: "Successfully Deleted"})
}

export const getByUserId = async(req, res, next) => {
    const userId = req.params.id;
    let userWorkouts;
    try{
        userWorkouts = await User.findById(userId).populate("workout")
    }catch(err){
        return console.log(err)
    }

    if(!userWorkouts){
        return res.status(404).json({message: "No Workout Found"})
    }

    return res.status(200).json({user: userWorkouts})
}