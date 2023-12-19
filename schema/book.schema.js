import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    book: {
        type : mongoose.Schema.ObjectId ,
        ref: "Purchase"
    },

    sellPrice: {
        type: Number, 
        // required: [true, 'Price is required']
    },

    discount: {
        type: Number, default: 0
    },
    
    keywords: [{
        type: String
    }],
    
    createdAt: {
        type: Date, default: Date.now
    },

    updateAt: {
        type: Date, default: Date.now
    }

})

const Book = mongoose.model("Book",bookSchema);
export default Book