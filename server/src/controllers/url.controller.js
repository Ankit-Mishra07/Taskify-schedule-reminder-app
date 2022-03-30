const express = require('express');

const router = express.Router();

const Url = require('../models/url.model')

router.post('/', async (req, res) => {
    try{
        const url = await Url.create(req.body)
        return res.status(200).send(url)
    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get('/', async (req, res) => {
    try {
        let userid = req.query.user
        let url;
        if(userid) {
            url = await Url.find({userId : userid})
        }else {
            return res.send({error : "Please login for your data"})
        }   
        
        return res.status(200).send(url)
    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const url = await Url.findByIdAndDelete(req.params.id);
        return res.status(200).send(url);

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})


router.get('/search', async (req, res) => {

    try {
        let url;
        let que = req.query.q
         url = await Url.find({title : {$regex : `/${que}/`}})
        
        return res.status(200).send(url)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }

})

module.exports = router;
