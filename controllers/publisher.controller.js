import Publisher from "../schema/publisher.schema.js"

export const createPublisher = async (req, res)=>{
    try {
        const data = req.body
        const publisher = await new Publisher(data).save()
        res.status(200).json(publisher)
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const fetchPublisher = async (req, res)=>{
    try {
        const data = await Publisher.find(req.query)
        res.status(200).json(data)
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const updatePublisher = async (req, res)=>{
    try {
        const _id = req.params.id;
        const data = req.body;
        await Publisher.updateOne({_id}, data)
        res.status(200).json({success: true})
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}

export const deletePublisher = async (req, res)=>{
    try {
        const _id = req.params.id;
        const result = await Publisher.deleteOne({_id})
        res.status(200).json({success: result})
    } 
    catch (err) {
        res.status(500).json({"Error": err})
    }
}