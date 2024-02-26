const teacherModel = require('../models/teacherModel')
const adminModel = require('../models/adminModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')


const maxAge = 1 * 24 * 24 * 60 
const createToken = (id,userType)=>{ // here i create a token which contains paylod, secret, and signture
    const role = userType 
    return JWT.sign({id, role},process.env.JWT_SECRET,{
        expiresIn: maxAge
        // this jwt will expire in one day
    })
}

async function login(email,password) {
    const user = await teacherModel.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            user.role = 'teacher'
            return user
        }
        throw Error('Incorrect Password')
    }
    else{
        const user = await adminModel.findOne({email})
        if(user){
            const auth = await bcrypt.compare(password,user.password)
            if(auth){
                user.role = 'admin'
                return user
            }
            throw Error('Incorrect Password')
        }
        throw Error('Incorrect Email')
    }
}

exports.post_signup = async (req,res,next)=>{
    try {
        const {fullname,email,password} = req.body
        let _email = email.toLowerCase();
        const user = await teacherModel.create({ 
            fullname,
            email:_email,
            password
        })
        // here i created token for every one user signup
        const token = createToken(user._id) 
        res.status(201).json({user:user._id,token:token})
    } catch (err) {
        next(err);
    }
}

exports.post_login = async (req,res,next)=>{
    const {email , password} = req.body
    try {
        const user = await login(email,password)
        // here i created token for every one user signup
        const token = createToken(user._id,user.role) 
        res.status(201).json({user:user._id, token:token})
    } catch (err) {
        next(err);
    }
}


exports.change_Password = async(req,res,next)=>{
    try {
        const {_id , password} = req.body
        const salt = await bcrypt.genSalt()
        const New_password = await bcrypt.hash(password, salt)
        const newData = await teacherModel.findByIdAndUpdate(_id,{password:New_password},{new:true})
        res.status(200).json({newData})
    } catch (err) {
        next(err)
    }
}
