import express from "express";
import { Login, Me } from "../controllers/jwtController";
import {AuthenticateToken} from "../libs/middlewares/authMiddleware";

export const authRouter = express.Router();

authRouter.post("/auth/login", Login);
authRouter.get("/auth/me", AuthenticateToken, Me);

authRouter.post("/auth/logout", (req, res) => {
    // todo: implement revoke token
    res.send("Logout");
});