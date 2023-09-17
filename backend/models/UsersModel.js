import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    workout:[{
        type: mongoose.Types.ObjectId,
        ref:"Workout",
        required: true}]
})

export default mongoose.model("User", userSchema)