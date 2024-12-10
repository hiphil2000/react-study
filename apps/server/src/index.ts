﻿import express, { Request, Response } from 'express';
import {type AppRouter} from "trpc/tprc";

const app = express();
const port = 5050;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});