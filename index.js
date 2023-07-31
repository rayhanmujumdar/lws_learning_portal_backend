require("dotenv").config();
const db = require("./src/db/db");
const app = require("./src/app/app");

const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

db("mongodb://localhost:27017/course").then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening port is ${PORT}`);
  });
});
