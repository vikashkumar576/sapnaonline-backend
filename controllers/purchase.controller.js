import Purchase from "../schema/purchase.schema.js";

// product creation
export const create = async (req, res)=>{
    try {
        let data = req.body;
        const product = await new Purchase(data).save()
        res.status(200).json(product)
    } 
    catch (err)
    {
        res.status(500).json({'Error' : err.message})
    }
}

// product fetcher

export const fetch = async (req, res)=>{
    try {
        let {page, pageLimit, ...query} = req.query;
        page = (page - 1)*pageLimit
        let total = await Purchase.countDocuments(query)
        const data = await Purchase.find(query).sort({createdAt : -1}).skip(page).limit(pageLimit)
        res.status(200).json({data, total})
    } 
    catch (err)
    {
        res.status(500).json({'Error' : err.message})
    }
}

// Purchase update

export const update = async (req, res)=>{
    try {
        const _id =  req.params.id;
        const data = req.body;
        await Purchase.updateOne({_id}, data)
        res.status(200).json({success : true})
    }
    catch (err)
    {
        res.status(500).json({'Error' : err.message})
    }
}

// Purchase delete

export const remove = async (req, res)=>{
    try {
        const _id =  req.params.id;
        await Purchase.deleteOne({_id})
        res.status(200).json({success : true})
    } 
    catch (err)
    {
        res.status(500).json({'Error' : err.message})
    }
}