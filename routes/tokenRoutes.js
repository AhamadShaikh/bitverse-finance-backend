const express = require("express");
const router = express.Router();
const Token = require("../model/tokenModel");

router.get("/tokens", async (req, res) => {
    const { page, limit } = req.query;
    const pageNo = parseInt(page) || 1;
    const limitNo = parseInt(limit) || 6;
    const skipCount = (pageNo - 1) * limitNo;

    try {
        const data = await Token.find({}).skip(skipCount).limit(limitNo);
        console.log(data);
        res.status(200).json({ data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;
