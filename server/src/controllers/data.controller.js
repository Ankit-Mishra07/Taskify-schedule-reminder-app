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
        // const page = +req.query.page || 1
        // const size = +req.query.size || 2
        // const skip = (page - 1) * size 
        // .skip(skip).limit(size).lean().exec();
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


router.delete('/:id', async(req, res) => {
    try{
        const data = await Data.findByIdAndDelete(req.params.id)
        return res.status(200).send(data)
    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})



module.exports = router






