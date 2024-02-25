const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


// Define the schema for address
const addressSchema = new mongoose.Schema({
    city: String,
    street: String,
    building: String
});

// Define the schema for child data
const childSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required: true
    },
    fullName: String,
    age: Number,
    level: {
        type: String,
        enum: ['PreKG', 'KG1', 'KG2']
    },
    address: addressSchema
});

// Create a model for the child schema
const Child = mongoose.model('Child', childSchema);
module.exports = Child;
