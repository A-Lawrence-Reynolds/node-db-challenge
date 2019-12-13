const express = require("express");
const server = express();

const projectRouter = require("./projectRoutes/projectRouter");
server.use(express.json());

server.use("/project", projectRouter);

module.exports = server;
