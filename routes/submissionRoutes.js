const express = require("express");

const verifyToken =
require("../middleware/authMiddleware");

const {
    submitSolution,
    getAllSubmissions
} = require("../controllers/submissionController");

const router = express.Router();

router.post(
    "/",
    verifyToken,
    submitSolution
);

router.get(
    "/",
    getAllSubmissions
);
 
module.exports = router;