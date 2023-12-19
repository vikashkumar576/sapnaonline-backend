import mongoose from "mongoose";
const {Schema} = mongoose;

const adminSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    email: {type: String, trim: true, required: [true, 'Email is required']},
    password: {type: String, trim: true, required: [true, 'Password is required']},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    token: [{String}]
})

// verifying duplicate email
adminSchema.pre('save', async function(next){
    const count = await mongoose.model('Admin').countDocuments({'email' : this.email})
    if(count) throw next(new Error("email already exists"))
    
    // if duplicate name doesn't there then
    next()
})

// password encryption
adminSchema.pre('save', async function(next){
    const encrypted = await bcrypt.hash(this.password,12)
    this.password = encrypted
    
    next()
})

const Admin = mongoose.model("Admin",adminSchema);
export default Admin