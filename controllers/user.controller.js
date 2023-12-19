import User from "../schema/user.schema.js"

export const createUser = async (req, res)=>{
    try {
        const data = req.body;
        let user = await User(data).save();
        user.password = undefined
        res.status(200).json({data: user})    
    } 
    catch (err) 
    {
        res.status(424).json({error : err.message})
    }
}

export const fetchUser = async (req, res)=>{
    try {
        const data = req.query;
        const users = await User.find(data) 
        res.status(200).json(users)    
    } 
    catch (err) 
    {
        res.status(424).json({"Error": err})
    }
}

export const updateUser = async (req, res)=>{
    try {
        const _id = req.params.id;
        const data = req.body;
        await User.updateOne({_id}, data)
        res.status(200).json({success: true})    
    } 
    catch (err) 
    {
        res.status(424).json({"Error": err})
    }
}

export const deleteUser = async (req, res)=>{
    try {
        const _id = req.params.id;
        await User.deleteOne({_id})
        res.status(200).json({success: true})    
    } 
    catch (err) 
    {
        res.status(424).json({"Error": err})
    }
}