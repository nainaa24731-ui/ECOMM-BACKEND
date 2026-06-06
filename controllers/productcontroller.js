let products=require('../models/product_model')

exports.createproduct=async (req,res)=>{
    try {
        const {title,price,image}=req.body
        await products.create({title,price,image})
        res.json({"msg":"product saved"})
    } catch (error) {
        res.json({"msg":error.message})
    }
}



exports.getproduct=async (req,res)=>{
    try {
        let maxlimit=req.query.limit
        let shipment=req.query.location
        let allproducts=await products.find().limit(maxlimit)
        res.json(allproducts)
    } catch (error) {
        res.status(200).json({"msg":error.message})
    }
}

exports.updateproduct=async (req,res)=>{
    try {
        let productid=req.params.id
        await products.findByIdAndUpdate(productid,req.body)
        res.status(200).json({"msg":"product Updated"})
    } catch (error) {
        res.status(500).json({"msg":error.message})
    }
}

exports.deleteproduct=async(req,res)=>{
    try {
        let productid=req.params.id
        await products.findByIdAndDelete(productid)
        res.json({"msg":"product Deleted"})
    } catch (error) {
        res.json({"msg":error.message})
    }
}

exports.bulkinsert=async (req,res)=>{
  try {
    await products.insertMany(req.body)
res.json({msg:"products saved"})
  } catch (error) {
    res.json(error.message)
  }
}