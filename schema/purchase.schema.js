import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Item name is required']
    },
    price: {
        type: Number, 
        required: [true, 'Price is required']
    },
    language: {
        type: String, 
        // required: [true, 'Language is required']
    },
    description : {
        type: String, 
        // required: [true, 'Description is required']
    },
    author: {
        type: mongoose.Schema.ObjectId, ref: 'Author', 
        default: 'NA'
        // required: true
    },

    publisher: {
        type: mongoose.Schema.ObjectId, ref: 'Publisher', 
        default: 'NA'
        // required: true
    },

    subject: {
        type: String,
        default: 'NA'
    },

    publishDate: {
        type: Date, 
        // required: [true, 'Publishing date is required']
    },

    pages: {
        type: Number, 
        // required: [true, 'Total pages is required']
    },

    edition: {
        type: Number, default: 1
    },

    binding: {type: String, default: 'paper back'},

    image: [String],

    quantity: {
        type: Number, 
        // required: [true, 'Quantity is required']
    },

    amount: {
        type: Number, 
        // required: [true, 'Amount is required']
    },

    createdAt: {
        type: Date, default: Date.now
    },

    updateAt: {
        type: Date, default: Date.now
    }
})

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase