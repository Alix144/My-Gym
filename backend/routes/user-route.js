import express from "express";
import { getAllUser, signup, login } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser)
router.post("/signup", signup)
router.post("/login", login)
router.get("/*", (req, res)=>{res.send({message:"404 not found"})})

export default router;