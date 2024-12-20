﻿import express from 'express';
import {authRouter} from "./routes/auth";
import "express-async-errors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5050;

// Middleware
app.use(express.json());

// router /auth
app.use(authRouter);

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});