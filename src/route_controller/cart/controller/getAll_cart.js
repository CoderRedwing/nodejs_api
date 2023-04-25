const prisma = require('../../../helper/prisma.helper')
async function GetAllCart(req,res){
try{
    const hey_=await prisma.cart.findMany({
        where:{
            User_id: req.user.id
        }
    })
    res.status(200).json({
        message:hey_
    })
}catch(err){
res.status(500).json({
    message:err.message
})
}
    
    
}
module.exports={GetAllCart}