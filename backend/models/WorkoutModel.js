import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    rep:{
        type: Number,
        required: true,
    },
    set:{
        type: Number,
        required: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
})

export default mongoose.model("Workout", WorkoutSchema);