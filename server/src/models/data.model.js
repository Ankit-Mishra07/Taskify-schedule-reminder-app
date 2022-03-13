const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    title : {type : String, required: true, minlength:1},
    creationDate : {type : String, required : true},
    scheduledDateTime : {type :String , required : true},
    link : {type :String, required : false},
    userId : {type : String, required : true}
}, {
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model("data", dataSchema)





// import moment from "moment";

// let isoDate = "2022-03-13T09:21:06.096+00:00";

// let newDate = moment.utc(isoDate).format("MM/DD/YY hh:mm:ss");
// console.log("converted date", newDate); // 09/23/21

// let newDate2 = moment.utc(isoDate).format("MMM Do, YYYY");
// console.log("converted date", newDate2);

// console.log(Date.now());

// const current = new Date();
// // By default US English uses 12hr time with AM/PM
// const time = current.toLocaleTimeString();

// console.log(current);