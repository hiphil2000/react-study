import {Request, Response, NextFunction, RequestHandler} from "express";
import JWT from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET!;

export const authenticateToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization!.split(" ")[1];
        req._decoded = JWT.verify(token, JWT_SECRET);
        next();
    } catch (e) {
        const tokenError = e as JWT.JsonWebTokenError;

        if (tokenError.name === "TokenExpiredError") {
            res.status(419).json({
                time: Date.now(),
                success: false,
                message: "Token Expired",
            });
        }

        if (tokenError.name === "JsonWebTokenError") {
            res.status(401).json({
                time: Date.now(),
                success: false,
                message: "Invalid Token",
            });
        }
    }
}