import mongoose from "mongoose";
const {Schema} = mongoose;

const paymentSchema = new Schema({
    id: { type: String, required: true },
    object: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    paid: { type: Boolean, required: true },
    receipt_email: { type: String },
    source: {
        id: { type: String, required: true },
        object: { type: String, required: true },
        last4: { type: String, required: true },
        brand: { type: String, required: true },
    },
    created: { type: Date, default: Date.now },
    // payment id
    // upi
    // method
    // card
    //  amount
    //tax
    // fee of gateway
    //description (product details)
    //wallet optional
    // currency default INR
    // status default pending
    // vpa optional
    // notes []


});

const Payment = mongoose.model('Payment', paymentSchema)
export default Payment