const prisma = require('../../../helper/prisma.helper')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function loginPost(req, res) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        console.log(user.password)
        if (user == null) {
            res.status(400).json({
                message: "email does not exits",
            })
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    res.status(201).json({
                        message: "some error ocured",
                    })
                } else if (result) {
                    const payload = {
                        email: user.email,
                        id: user.id
                    }
                    const options = {
                        expiresIn: '1h' // Token expiration time
                    };
                    const token = jwt.sign(payload, process.env.SCERET_KEY, options);
                    res.status(300).json({
                        message: "user logged successfully",
                        data: {
                            TOKEN: token
                        }
                    })
                } else {
                    res.status(301).json({
                        message: "password is wrong",
                    })
                }
            });
        }
    } catch (err) {
        res.status(100).json({
            message: err.message,
        })
    }
}
module.exports = { loginPost }