import Author from "../schema/author.schema.js"

export const createAuthor = async (req, res)=>{
    try {
        const data = req.body;
        const author = await Author(data).save()
        res.status(200).json(author);
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const fetchAuthor = async (req, res)=>{
    try {
        const data = await Author.find(req.query)
        res.status(200).json(data);
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const updateAuthor = async (req, res)=>{
   try {
        const _id = req.params.id;
        const data = req.body;
        await Author.updateOne({_id}, data)
        res.status(200).json({success: true});
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const deleteAuthor = async (req, res)=>{
    try {
        const _id = req.params.id;
        await Author.deleteOne({_id})
        res.status(200).json({success: true});
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}
