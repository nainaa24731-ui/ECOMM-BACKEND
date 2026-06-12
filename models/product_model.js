const mongoose=require ('mongoose');
let productschema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String},
    category:{type:String},
    rating:{
        rate:{type:Number},
        count:{type:Number}
    }
},{ timestamps:true});

module.exports=mongoose.model('products',productschema);

// const mongoose=require ('mongoose');
// const productschema=new mongoose.Schema({
//     title:{type:String,required:true},
//     price:{type:Number,required:true},
//     image:{type:String,required:true},
// })

// let products=mongoose.model('products',productschema) 

// module.exports=products;
