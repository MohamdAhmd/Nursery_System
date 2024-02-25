const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the schema for class data
const classSchema = new mongoose.Schema({
    name: String,
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers' // Assuming there's a Teacher model with _id as Number
    },
    children: [{
        type: Number,
        ref: 'Child' // Assuming there's a Child model with _id as Number
    }]
},{_id:false});

classSchema.plugin(AutoIncrement);

// Create a model for the class schema
const Class = mongoose.model('Class', classSchema);
module.exports = Class;
