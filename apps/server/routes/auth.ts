import express from "express";
import { Login } from "../controllers/jwtController";

export const authRouter = express.Router();

authRouter.post("/auth/login", Login);

authRouter.post("/auth/logout", (req, res) => {
    res.send("Logout");
});