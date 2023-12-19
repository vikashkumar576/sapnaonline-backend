import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: [true, 'Username is required']
    },  

    email: {
        type: String, 
        trim: true, required: [true, 'Email is required'] , unique: true
    },

    mobile: {
        type: String, 
        required: [true, 'Mobile is required']
    },

    password: {
        type: String, 
        trim: true, required: [true, 'Password is required']
    },

    cart: [{
        type: mongoose.Schema.ObjectId, 
        ref: 'Product'
    }],

    address: [{
        type: String}
    ],

    tokens: [{
        type: String
    }],

    createdAt: {
        type: Date, 
        default: Date.now
    },

    updateAt: {
        type: Date,
         default: Date.now
    }

})

userSchema.index({email: 1,mobile: 1})

//checks unique and latency fast

// verifying duplicate email
// userSchema.pre('save', async function(next){
//     const count = await mongoose.model('User').countDocuments({'email' : this.email})
//     if(count) throw next(new Error("email already exists"))
    
//     // if duplicate name doesn't there then
//     next()
// })

// password encryption
userSchema.pre('save', async function(next){
    const encrypted = await bcrypt.hash(this.password,12)
    this.password = encrypted
    
    next()
})

const User = mongoose.model("User", userSchema);
export default User