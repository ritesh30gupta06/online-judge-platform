const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

/*
=================================
REGISTER USER
POST /api/auth/register
=================================
*/

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const checkUserQuery =
            "SELECT * FROM users WHERE email = ?";

        db.query(
            checkUserQuery,
            [email],
            async (err, result) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database Error",
                        error: err.message
                    });
                }

                if (result.length > 0) {
                    return res.status(400).json({
                        message: "Email already exists"
                    });
                }

                const hashedPassword =
                    await bcrypt.hash(password, 10);

                const insertQuery =
                    "INSERT INTO users(name,email,password) VALUES(?,?,?)";

                db.query(
                    insertQuery,
                    [name, email, hashedPassword],
                    (err, result) => {

                        if (err) {
                            return res.status(500).json({
                                message: "Database Error",
                                error: err.message
                            });
                        }

                        return res.status(201).json({
                            message: "User Registered Successfully"
                        });

                    }
                );

            }
        );

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

});

/*
=================================
LOGIN USER
POST /api/auth/login
=================================
*/

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const user = result[0];

        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            message: "Login Successful",
            token
        });

    });

});

module.exports = router;