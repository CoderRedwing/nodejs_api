const prisma = require('../../../helper/prisma.helper')
async function GetAllProduct(req,res){
 try{
    const res_ = await prisma.product.findMany()
    res.status(200).json({
        data:res_
    })
 }catch(err){
    res.status(500).json({
        Message:err.message
    })    
 }
}
module.exports={GetAllProduct}