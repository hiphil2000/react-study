import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {IResponseBase} from "./responseBase";
import "dotenv/config";
import {IMSLogin} from "../db/auth";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function Login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const result = await IMSLogin(username, password);
    const success = result.recordset.length > 0 && result.recordset[0][""] === "Y";

    if (success) {
        const payload = { username };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const response: IResponseBase<string> = {
            time: Date.now(),
            success: success,
            data: token
        }

        res.status(200).json(response);
    } else {
        const response: IResponseBase<null> = {
            time: Date.now(),
            success: success,
            data: null,
            message: "Invalid username or password",
        }

        res.status(401).json(response);
    }
}