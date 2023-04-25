const prisma = require('../../../helper/prisma.helper')
async function CartDelete(req,res){
try{
const res_ = await prisma.Cart.delete({
    where:{
       id:req.body.id 
    }
})
res.status(200).json({
    message: res_
})
}catch(err){
    res.status(500).json({
        message:err.message
    })
}
}
module.exports={CartDelete}