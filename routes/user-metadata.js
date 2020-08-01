var express = require("express");
var router = express.Router();
var userMetadataController = require("../controllers/user-metadata-controller");

router.get("/get", userMetadataController.get);
router.post("/post", userMetadataController.post);

module.exports = router;
