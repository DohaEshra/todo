const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
//schema
let TodoSchema = new mongoose.Schema({
    _id:{type:Number},
    Task:{type:String, required:true},
    User:{type:Number, required:true}
});


TodoSchema.plugin(AutoIncrement, { inc_field: "_id" });
module.exports=mongoose.model("Todo", TodoSchema)
