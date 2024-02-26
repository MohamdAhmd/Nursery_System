const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength:[8,'Minimum Password Length Is 6 characters']
    }
})

adminSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel
