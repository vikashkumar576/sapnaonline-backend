import Book from "../schema/book.schema.js"

export const createBook = async (req, res)=>{
    try {
        const data = req.body;
        const result = await new Book(data).save()
        res.status(200).json(result)
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err})
    }
}

export const fetchBook = async (req, res)=>{
    try {
        const { limit, ...query} = req.query
        const data = await Book.find(query).limit(limit || 0)
        .populate({
            path: 'book',
            populate: {
                path: 'author publisher',
            }
        })
        res.status(200).json(data)
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err})
    }
}

export const fetchBookById = async (req, res)=>{
    try {
        const _id = req.params.id
        const data = await Book.findById({_id})
        .populate({
            path: 'book',
            populate: {
                path: 'author publisher',
            }
        })
        res.status(200).json(data)
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err})
    }
}

export const updateBook = async (req, res)=>{
    try {
        const _id = req.params.id;
        const data = req.body;
        await Book.updateOne({_id}, data)
        res.status(200).json({success: true})
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err})
    }
}

export const deleteBook = async (req, res)=>{
    try {
        const _id = req.params.id;
        await Book.deleteOne({_id})
        res.status(200).json({success: true})
    } 
    catch (err) 
    {
        res.status(500).json({"Error" : err})
    }
}