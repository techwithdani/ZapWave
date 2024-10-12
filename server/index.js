const express = require("express");
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");

const app = express();
const server = createServer(app);
const io = new Server(server);

dotenv.config();

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
    console.log("A User Connected...");
});

server.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
