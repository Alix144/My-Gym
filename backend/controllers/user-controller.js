import User from "../models/UsersModel.js";
import bcrypt from "bcryptjs";

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err)
    }

    if(!users){
        return res.status(404).json({message: "No Users Found"})
    }

    return res.status(200).json({users});
}

export const signup = async(req, res, next) => {
    const {userName, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({userName})

    }catch(err){
        return console.log(err + "there was an nnnnaereoreor")
    }

    if(existingUser){
        return res.status(400).json({message: "User Already Exists! Login Instead"})
    }

    const hashedPassword = bcrypt.hashSync(password);
    

    const user= new User({
        userName,
        password: hashedPassword,
        blogs:[]
    })

    try{
        await user.save()
    }catch(err){
        console.log(err +"jjjnkn")
        return res.status(400).json({message: err})
    }

    return res.status(201).json({user})
}


export const login = async(req, res, next) => {
    const {userName, password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({userName})

    }catch(err){
        return console.log(err)
    }

    if(!existingUser){
        return res.status(404).json({message: "User Does Not Exist!"})
    }

    const isPassCorrect = bcrypt.compareSync(password,  existingUser.password)

    if(!isPassCorrect){
        return res.status(400).json({message: "Incorrect Password"})
    }

    return res.status(200).json({message: "Login Successfull", user: existingUser})
}