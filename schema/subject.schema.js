import mongoose from "mongoose";
const {Schema} = mongoose;

const subjectSchema = new Schema({
    subName: {type: String, required: [true, 'subject name is required']},
    keywords: [{type: String}],
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject