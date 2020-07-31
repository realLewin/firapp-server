var express = require("express");
var router = express.Router();
var postController = require("../controllers/post-controller");

router.post("/post", postController.insertPost);

router.get("/get", postController.getPost);

module.exports = router;
