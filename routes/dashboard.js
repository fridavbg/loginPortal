const express = require("express");

const router = express.Router();

// DASHBOARD
router.get("/", (req, res) => {
	res.render("dashboard");
});

// DASHBOARD/nextLevel

module.exports = router;
