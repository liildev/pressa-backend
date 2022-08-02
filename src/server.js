import express from "express";
import routers from "./modules/index.js";
import path from "path";
import * as http from 'http';
import cors from 'cors';
import socket from './modules/socket/index.js';
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.static(path.join(path.join(process.cwd(), "src", "uploads"))));
app.use(routers);


const server = http.createServer(app);

socket(server)

server.listen(process.env.PORT || 3001 , () => console.log(`*${process.env.PORT}`));
