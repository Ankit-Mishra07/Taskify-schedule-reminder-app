const express = require('express')

const router = express.Router()

const {body, validationResult} = require('express-validator')

const Register = require('../models/register.model')


router.post('/register',
body('name').isLength({min:1}).withMessage('name is required'),
body('mobile').isLength({min:10, max  :10}).withMessage('valid mobile number is required'),
body('email').custom(async (value) => {
    const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
    const listOfDomain = ['gmail.com', "masaischool.com", 'yahoo.com']
    const email = value.split("@");
    
    if(!listOfDomain.includes(email[1])) {
        throw new Error("We do not accept emails from this domain");
    }

    if(!isEmail) {
        throw new Error("Please enter a proper email address");
    }

    const userByEmail = await Register.findOne({email : value}).lean().exec()
    if(userByEmail) {
        throw new Error("Please try with a different email address")
    }
    return true
}),
body('password').isLength({min:6}).withMessage('password should be atleast 6 character'),

async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            let newError = errors.array().map(({msg, param, location}) => {
                return {
                    [param] : msg
                }
            })
            return res.status(400).json({ errors: newError})
        }

        // let userBymobile = await Register.find({mobile : req.body.mobile})

        // if(userBymobile) {
        //     return res.status(400).json({ errors: [{mobile : }]})
        // }
        const register = await Register.create(req.body)

        return res.status(201).send(register)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


router.get('/register' , async (req, res) => {
    try{
      
        const register = await Register.find().lean().exec()
        res.status(200).send(register)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


module.exports = router
