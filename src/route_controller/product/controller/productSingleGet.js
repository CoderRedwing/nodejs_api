const prisma = require('../../../helper/prisma.helper')
async function GetSingleProduct(req,res){
 try{
    const res_ = await prisma.product.findUnique({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({
        data:res_
    })
 }catch(err){
    res.status(500).json({
        Message:err.message
    })    
 }
}
module.exports={GetSingleProduct}