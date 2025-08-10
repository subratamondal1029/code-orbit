import express, { Request, Response } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import setupIO from './socket/config.js';
import ApiResponse from './utils/ApiResponse.js';

const corsConfig = {
  origin: process.env.ORIGIN || 'http://localhost:5173',
  credentials: true,
};

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: corsConfig,
});
setupIO(io);

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('io', io);

app.get('/', (req: Request, res: Response) => {
  res.json(new ApiResponse(200, 'ok'));
});

// Routes here

export default server;
