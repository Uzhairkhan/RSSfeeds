const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3050;
const mongoose = require("./config/database");
const router = require("./config/routes");

app.use(express.json());

app.use(cors());

app.use("/", router);

app.get("/", (req, res) => res.send("RSS Feeds"));

app.listen(PORT, () => console.log(`Server started at port ${PORT} `));
