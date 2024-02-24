const userModel = require('../models/usersModel')
exports.addAdmin = async (req,res,next)=>{
    try {
        const {name,email,password,role} = req.body
        const user = await userModel.create({name,email,password,role})
        // here i created token for every one user signup
        // const token = createToken(user._id) 
        // // here i send cookie for frontend
        // res.cookie('jwt',token,{ httpOnly:true, maxAge:maxAge * 1000}) 
        res.status(201).json({user})
    } catch (err) {
        // const errors = handelError(err)
        res.status(404).json({err})
    }
}

exports.getAllTeachers = async (req,res,next)=>{
    try {
        const teachers = await userModel.find({role:"teacher"})
        res.status(200).json({teachers})
    } catch (err) {
        res.status(404).json({err})
    }
}

exports.addTeacher = async(req,res,next)=>{
    try{
        const role = 'teacher'
        const {name,email,password} = req.body
        const user = await userModel.create({name,email,password,role})
        res.status(201).json({user})
    }catch(err){
        res.status(404).json({err})
    }
}

exports.deleteTeacherById = (req,res,next)=>{
    try {
        const id = req.params.id;
        userModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
} 

exports.updateTeacher = async (req,res,next)=>{
    try {
        const id = req.body.id
        const data = req.body       
        const newData = await userModel.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({newData})
    } catch (error) {
        res.status(500).json({ message: error + '' });
    }
}


//----------------- CRUD CHILD ----------------


exports.getAllChildren = async (req,res,next)=>{
    try {
        const teachers = await userModel.find({role:"child"})
        res.status(200).json({teachers})
    } catch (err) {
        res.status(404).json({err})
    }
}

exports.addChild = async(req,res,next)=>{
    try{
        const role = 'child'
        const {name,email,password} = req.body
        const user = await userModel.create({name,email,password,role})
        res.status(201).json({user})
    }catch(err){
        res.status(404).json({err})
    }
}

exports.deleteChildById = (req,res,next)=>{
    try {
        const id = req.params.id;
        userModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
} 

exports.updateChild = async (req,res,next)=>{
    try {
        const id = req.body.id
        const data = req.body 
        const user = await userModel.findOne({_id:id})
        if(user.role != 'child')
            throw new Error('Not Valid Id');
        const newData = await userModel.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({newData})
    } catch (error) {
        res.status(500).json({ message: error + '' });
    }
}