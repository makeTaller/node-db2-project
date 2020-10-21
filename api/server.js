const express = require("express");
const cars = require("../cars/cars-router");

// const db = require("../data/connections.js");

const server = express();

server.use(express.json());
server.use( cars)

module.exports = server;
