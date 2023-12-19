import mongoose from "mongoose";
const {Schema} = mongoose;

const saleSchema = new Schema({
    items: {type: Schema.ObjectId, ref: 'Product', required: [true, 'Item name is required']},
    quantity: {type: Number, required: [true, 'quantity is required']},
    createdAt: {type: Date, default: Date.now}
})

const Sale = mongoose.model("Sale", saleSchema);
export default Sale