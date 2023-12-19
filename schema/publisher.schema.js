import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    publisherName: {type: String, required: [true, 'Publisher name is required']},
    mobile: Number,
    address: String,
    slogan: String,
    established: Date,
    image: String,
    keywords: [{type: String}],
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

const Publisher = mongoose.model("Publisher", publisherSchema);
export default Publisher