const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({
            message: "Access Denied. No Token Provided"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verified;

        next();

    } catch (error) {

        return res.status(400).json({
            message: "Invalid Token"
        });

    }

};

module.exports = verifyToken;