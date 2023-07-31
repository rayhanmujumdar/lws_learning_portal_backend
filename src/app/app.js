require("dotenv").config();
const { notFoundError, errorHandler } = require("../error");
const middleware = require("../middleware");
const router = require("../router/v1");
const express = require("express");
const app = express();

//middleware
app.use(middleware);

// Routing
app.use(router);

// global error handler
app.use(notFoundError);
app.use(errorHandler);

module.exports = app;
