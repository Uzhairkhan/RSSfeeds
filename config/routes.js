const express = require("express");
const router = express.Router();
const feedsController = require("../app/controller/feedsController");

router.post("/latest/RSS", feedsController.create);
router.get("/RSS/feeds", feedsController.list);

module.exports = router;
