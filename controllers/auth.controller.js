import axios from "axios";
import { response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

axios.defaults.baseURL = process.env.BASE_URL

export const signupHandler = async (req, res)=>{
    try {
        const signipData = req.body;
        const {data:{data:response}} = await axios.post("/user", signipData)
        const tokens = jwt.sign(
            {response},
            process.env.JWT_SECRET,
            {expiresIn: 1800}
            )
        const {data} = await axios.put(`/user/${response._id}`, {$set: {tokens}})
            
        res.status(200).json({success: data.success});
    } 
    catch (err) 
    {
        res.status(500).json(err.response.data);
    }

}

export const loginHandler = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const {data} = await axios.get(`/user?email=${email}`)

        if(!data.length) return res.status(404).json({"Error" :"user doesn't exists !"})

        const validate = await bcrypt.compare(password, data[0].password);

        if(!validate) return res.status(401).json({"Error" :"invalid credencial"})

        res.status(200).json({success: true});
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err.response});
    }
}
