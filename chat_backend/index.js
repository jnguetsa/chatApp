const conn = require("./conn/conn.js");
const express = require("express");
const routerAuth = require("./router/routerAuth.js");
const router = require("./router/router.js");

const app = express();

app.use(express.json());

app.use("/api/auth", routerAuth);
app.use("/api", router);

const server = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server lancé au http://localhost:3000");
    });
  } catch (error) {
    console.log("Le server n'a pas pu démarrer normalement: ", error);
  }
};

conn();
server();
