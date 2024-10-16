const express = require("express");
const cors = require("cors");
const { createServer } = require("node:http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const server = createServer(app);

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.CONNECTION_STRING, { dbName: "UserData" })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log(error));

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
