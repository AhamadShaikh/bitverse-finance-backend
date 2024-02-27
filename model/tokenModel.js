const { default: mongoose } = require("mongoose");


const tokenSchema = new mongoose.Schema({
    img: { type: String, required: true },
    tokenName:{ type: String, required: true },
    symbol: { type: String, required: true },
    decimals: { type: Number, required: true },
    marketcap: { type: Number, required: true },
    chain: { type: String, required: true }
})

const Token = mongoose.model("token", tokenSchema)

module.exports = Token