require("dotenv").config();
require("./config/db");

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const problemRoutes = require("./routes/problemRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

const verifyToken =
require("./middleware/authMiddleware");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/submissions", submissionRoutes);

app.get("/", (req, res) => {
    res.send("Online Judge Backend Running");
});

app.get(
    "/profile",
    verifyToken,
    (req, res) => {
        res.json({
            message:
            "Protected Route Accessed Successfully",
            user: req.user
        });
    }
);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});