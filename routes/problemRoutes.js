const express = require("express");

const router = express.Router();

const {
    addProblem,
    getAllProblems,
    getProblemById
} = require("../controllers/problemController");

router.post("/", addProblem);

router.get("/", getAllProblems);

router.get("/:id", getProblemById);

module.exports = router;