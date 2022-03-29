const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    title : {type : String, required : true},
    url : {type:String, required : true},
    userId : {type : String, required : true} 
})

module.exports = mongoose.model('url', UrlSchema)