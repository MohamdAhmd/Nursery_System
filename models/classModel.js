const mongoose = require('mongoose');

classSchema = mongoose.Schema({
    classId:Number,
    name:{
        type: String,
        required: true
    },

})

const classModel = mongoose.model("class", classSchema);
module.exports = classModel
