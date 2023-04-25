const prisma = require('../../../helper/prisma.helper')
async function cartPost(req, res) {
    try {
        const exits= await prisma.cart.findFirst({
            where:{
                Product_id: req.body.Product_id, 
            }
        })
        console.log(exits)
        if(exits==null){
            const data_ = await prisma.cart.create({
                data: {
                    Product_id: req.body.Product_id,
                    User_id: req.user.id
                }
            })
            res.status(200).json({
                messa: data_
            })
        }else{
            const data_= await prisma.cart.update({
                where:{
                    id:exits.id
                },
                data:{
                    Quantity:exits.Quantity+1
                }
            })
            res.status(200).json({
                messa: data_
            })
        }
       

    } catch (err) {
        console.log(err)
        res.status(500).json({
            messa: err.message
        })

    }
}
module.exports = { cartPost }