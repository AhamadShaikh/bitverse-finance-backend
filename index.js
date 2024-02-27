
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
require("dotenv").config()
const cors = require("cors")
const router = express.Router()
const Token = require("./model/tokenModel")


app.use(express.json())

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

app.use(cors({
    origin: "*"
}))

router.get("/tokens", async (req, res) => {
    try {
        console.log('yes');
        let data = await Token.find({})
        res.status(200).json({ data: data })
    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error')
    }
})

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    connection()
    console.log("Port is running on 7000");
})