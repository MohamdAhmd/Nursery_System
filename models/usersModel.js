const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({

    name: {
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
    image: { type: String },
    class:{
        type: String,
        ref: 'class'
    },
    role: {
        type: String,
        required: true,

        enum:['admin','teacher','child']
    },
},
{_id: false})
userSchema.plugin(AutoIncrement);


userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


const usersSchema = mongoose.model("users", userSchema);
module.exports = usersSchema
