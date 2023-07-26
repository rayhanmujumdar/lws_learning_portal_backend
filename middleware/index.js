const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const middleware = [cors(), morgan("dev"), express.json()];

module.exports = middleware;
