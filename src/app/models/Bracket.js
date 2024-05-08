import mongoose from "mongoose";

const bracketSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    user: String,
    state: [{"slot": String, "team": String}]
})

export default mongoose.models.Bracket || mongoose.model("Bracket", bracketSchema, "brackets")