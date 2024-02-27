const express = require("express");
const router = express.Router();
const Token = require("../model/tokenModel");

router.get("/tokens", async (req, res) => {
    try {
        // --- page and limit functionality
        const { page, limit } = req.query;
        if (!page)
            page = 1
        const data = await Token.find().skip((page - 1) * 17).limit(limit)
        res.status(200).json({ data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;
