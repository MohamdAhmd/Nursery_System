const teacherModel = require('../models/teacherModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')


const maxAge = 1 * 24 * 24 * 60 
const createToken = (id)=>{ // here i create a token which contains paylod, secret, and signture
    const role = 'teacher'
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
            return user
        }
        throw Error('Incorrect Password')
    }
    throw Error('Incorrect Email')
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
         // Set the token in the response headers
         //res.setHeader('Authorization', `Bearer ${token}`);
        // here i send cookie for frontend
        // res.cookie('jwt',token,{ httpOnly:true, maxAge:maxAge * 1000}) 
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
        const token = createToken(user._id) 
         // Set the token in the response headers
        //  res.setHeader('authorization', `Bearer ${token}`);
        // // here i send cookie for frontend

        // // res.cookie('jwt',token,{ httpOnly:true, maxAge:maxAge * 1000}) 
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
