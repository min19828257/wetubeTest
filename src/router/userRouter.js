import express from "express";
import {see, edit, join, remove, logout} from "../controller/userController";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit user");


userRouter.get("/join", join);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit)
userRouter.get("/remove", remove);
userRouter.get("/:id", see)

export default userRouter