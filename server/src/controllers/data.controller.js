const express = require("express");
const router = express.Router();
const Data = require('../models/data.model')

router.post("/", async(req, res) =>{
    try{
        const data = await Data.create(req.body)
        res.status(200).send(data)
    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async(req, res) => {
    try {

        let data;
        let userid = req.query.user
        if(userid) {
            data = await Data.find({userId : userid})
        }else {
            return res.send({error : "Please login for your data"})
        }   
        
        return res.status(200).send(data)

    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.put('/', async(req, res) => {
    try {

    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


module.exports = router






