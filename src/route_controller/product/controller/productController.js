const prisma = require('../../../helper/prisma.helper')
async function productPost(req,res){
    try {
        const info = req.body
        const data_= await prisma.product.create({
            data:{
                ...info
            }
        })
        res.status(200).json({
            mesaggee: data_ 
        })
    }catch(err){
        res.status(500).json({
            Message:err.message
        })      
    }
}
module.exports={productPost}
 
