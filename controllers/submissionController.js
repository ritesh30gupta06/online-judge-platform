const db = require("../config/db");

const submitSolution = (req, res) => {

    const { problem_id, language, code } = req.body;

    const user_id = req.user.id;

    let verdict = "Wrong Answer";

    if (code.includes("return 0")) {
        verdict = "Accepted";
    }

    const sql = `
        INSERT INTO submissions
        (
            user_id,
            problem_id,
            code,
            language,
            verdict
        )
        VALUES (?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            user_id,
            problem_id,
            code,
            language,
            verdict
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err.message
                });
            }

            return res.status(201).json({
                message: "Submission Stored",
                verdict
            });

        }
    );
};

const getAllSubmissions = (req, res) => {

    const user_id = req.user.id;

    const sql = `
        SELECT *
        FROM submissions
        WHERE user_id = ?
        ORDER BY submitted_at DESC
    `;

    db.query(
        sql,
        [user_id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );
};

module.exports = {
    submitSolution,
    getAllSubmissions
};