const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const teacherSchema = mongoose.Schema({
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
    },
    image: { type: String }
})

teacherSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const teachers = mongoose.model("teachers", teacherSchema);
module.exports = teachers
