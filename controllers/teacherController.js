const teacherModel = require('../models/teacherModel')
const classModel = require('../models/classModel')

exports.getAllTeachers = async (req,res,next)=>{
    try {
        const teachers = await teacherModel.find()
        res.status(200).json({teachers})
    } catch (err) {
        next(err)
    }
}

exports.addNewTeacher =async (req,res,next)=>{
    try{
        const imgPath = req.file.path
        const {fullname,email,password} = req.body
        let _email = email.toLowerCase();
        const user = await teacherModel.create({
            fullname,
            email:_email,
            password,
            image:imgPath
        })
        res.status(201).json({user})
    }catch(err){
        next(err)
    }}

exports.updateTeacher = async (req,res,next)=>{
    try {
        const id = req.body.id
        const data = req.body       
        const newData = await teacherModel.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({newData})
    } catch (err) {
        next(err)
    }
}

exports.deleteTeacher = (req,res,next)=>{
    try {
        const id = req.params.id;
        teacherModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((err) => {
            next(err)
        });
    }
    catch (err) {
        next(err)
    }}

exports.getTeacherByid = (req,res,next)=>{
    try {
        const id = req.params.id;
        teacherModel.findOne({_id:id}).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            next(error)
        });
    }
    catch (error) {
        next(error)
    }
}

exports.getAllSupervisors = async(req,res,next)=>{
    try {
        const classes = await classModel.find().populate('supervisor');
        const supervisors = classes.map(cls => cls.supervisor);
        res.status(200).json({ supervisors });
    } catch (error) {
        next(error)
    }}
