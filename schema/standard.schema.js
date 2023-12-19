import mongoose from "mongoose";
const {Schema} = mongoose;

const standardSchema = new Schema ({
    standard: {type: Number, default: null},
    standardType: {type: String, default: null},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

const Standard = mongoose.model('Standard', standardSchema)
export default Standard