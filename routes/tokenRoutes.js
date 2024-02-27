
const express = require("express")
const router = express.Router()
const Token = require("../model/tokenModel")

router.get("/tokens", async (req, res) => {
    try {
        let data = await Token.find({})
        console.log(data);
        res.status(200).json({ data: data })
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')
    }
})

module.exports = router
