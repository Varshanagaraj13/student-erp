const express = require("express");
const router = express.Router();

const students = require("../data/students");

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    const student = students.find(
        s =>
            s.username === username &&
            s.password === password
    );

    if (!student) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    res.json({
        id: student.id,
        role: student.role,
        name: student.name
    });

});

module.exports = router;