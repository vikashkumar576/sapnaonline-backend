import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    authorName: {type: String, required: [true, 'Author is reqired']},
    gender: {type: String, required: [true, "Gender is required"]},
    language: [{type: String, required: [true, 'Language is required']}],
    genre: [{type: String, required: [true, 'Author genre is required']}],
    birthDate: {type: Date, required: [true, 'Author birth is required']},
    image: String,
    mobile: Number,
    address: String,
    keywords: [{type: String}],
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

const Author = mongoose.model("Author", authorSchema);
export default Author