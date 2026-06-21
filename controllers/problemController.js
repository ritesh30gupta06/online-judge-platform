const db = require("../config/db");

/*
================================
ADD PROBLEM
================================
*/

const addProblem = (req, res) => {

    const {
        title,
        difficulty,
        description,
        sample_input,
        sample_output
    } = req.body;

    const sql = `
        INSERT INTO problems
        (
            title,
            difficulty,
            description,
            sample_input,
            sample_output
        )
        VALUES (?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            title,
            difficulty,
            description,
            sample_input,
            sample_output
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err.message
                });
            }

            return res.status(201).json({
                message: "Problem Added Successfully"
            });

        }
    );
};

/*
================================
GET ALL PROBLEMS
================================
*/

const getAllProblems = (req, res) => {

    const sql = "SELECT * FROM problems";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        return res.status(200).json(result);

    });

};

/*
================================
GET PROBLEM BY ID
================================
*/

const getProblemById = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT *
        FROM problems
        WHERE id = ?
    `;

    db.query(
        sql,
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Problem Not Found"
                });
            }

            return res.status(200).json(
                result[0]
            );

        }
    );

};

module.exports = {
    addProblem,
    getAllProblems,
    getProblemById
};
