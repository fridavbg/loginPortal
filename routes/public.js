const express = require("express");

const router = express.Router();

// Home page

// GET request
router.get("/", (reg, res) => {
	res.render("index");
});

module.exports = router;
