const jwt = require('jsonwebtoken')

async function auth(req,res,next){
    const token = req.headers['token']

    if(!token){
        res.status(500).json({
            message:"Token not found you are not allowed"
        })
    }else{
        const data = jwt.verify(token,process.env.SCERET_KEY,(err,info)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message:"Error ocuured while verifying token"
                })
            }else{
                req.user = info
                next()
            }
        })
    }
}
module.exports = auth