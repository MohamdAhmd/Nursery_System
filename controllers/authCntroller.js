// const userModel= require('../models/usersModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')


const maxAge = 1 * 24 * 24 * 60 
const createToken = (id)=>{ // here i create a token which contains paylod, secret, and signture
    return JWT.sign({id},process.env.JWT_SECRET,{
        expiresIn: maxAge
        // this jwt will expire in one day
    })
}

async function login(email,password) {
    const user = await userModel.findOne({email})
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
        const role = 'teacher'  
        const {name,email,password} = req.body
        const user = await userModel.create({name,email,password,role})
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
