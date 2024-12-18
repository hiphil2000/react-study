import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {IMSLogin, UserSelect} from "../libs/db/auth";
import {RSADecrypt, TripleDESCBCEncrypt} from "../libs/crypto";
import dayjs from "dayjs";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function Login(req: Request, res: Response, next: NextFunction) {
    const { userId, password } = req.body;
    let success = false;

    const decrypted = await RSADecrypt(password);
    if (decrypted !== null) {
        const result = await IMSLogin(userId, TripleDESCBCEncrypt(decrypted));
        success = result.recordset.length > 0 && result.recordset[0][""] === "Y";
    }

    if (success) {
        const payload = { userId: userId };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const response = {
            time: dayjs(),
            success: success,
            token: token
        }

        res.status(200).json(response);
    } else {
        const response = {
            time: dayjs(),
            success: success,
            message: "Invalid username or password",
        }

        res.status(401).json(response);
    }

    next();
}

export async function Me(req: Request, res: Response, next: NextFunction) {
    const token = req._decoded;
    const result = await UserSelect(token.userId);

    if (result.recordset.length > 0) {
        const user = result.recordset[0];
        const response = {
            time: dayjs(),
            success: true,
            user: user
        }

        res.status(200).json(response);
    } else {
        const response = {
            time: dayjs(),
            success: false,
            message: "User not found"
        }

        res.status(404).json(response);
    }

    next();
}