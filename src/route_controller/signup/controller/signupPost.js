const prisma = require('../../../helper/prisma.helper')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const bcrypt = require('bcrypt');
const saltRounds = 5;


async function signupPost(req, res) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        if (user == null) {
            if (emailRegex.test(req.body.email) == true) {
                bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                    if (err) {
                        res.status(301).json({
                            message: "some error ocured in bycripct",
                        })
                    } else {
                        const user = await prisma.user.create({
                            data: {

                                email: req.body.email,
                                password: hash,
                            },
                        })
                        res.status(200).json({
                            message: "user created successfully",
                            data: user
                        })
                    }
                });
            } else {
                res.status(500).json({
                    message: "enter valid email",
                })
            }
        } else {
            res.status(400).json({
                message: "email already exists  enter another email"
            })
        }
    } catch (err) {
        res.status(300).json({
            message: err.message
        })
    }
}
module.exports = { signupPost }