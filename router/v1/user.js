const router = require("express").Router();
const { registerController } = require("../../controller/user");

// register route
router.post("/register", registerController);

module.exports = router;
