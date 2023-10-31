require("dotenv").config();
const db = require("./src/db/db.js");
const app = require("./src/app/app.js");

const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

db(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.izepew7.mongodb.net/course`
).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening port is ${PORT}`);
  });
});
