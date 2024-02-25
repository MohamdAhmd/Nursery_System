const childModel = require('../models/childModel')
exports.getAllChildern = async (req,res,next)=>{
    try {
        console.log(res.cookie.jwt);
        const children = await childModel.find()
        res.status(200).json({children})
    } catch (err) {
        next(err)
    }}

exports.addNewChild = async (req,res,next)=>{
    try{
        const user = await childModel.create(req.body)
        res.status(201).json({user})
    }catch(err){
        next(err)
    }}
exports.updatechild = async (req,res,next)=>{
        try {
            const id = req.body._id
            const data = req.body       
            const newData = await childModel.findByIdAndUpdate({_id:id},data,{new:true})
            res.status(200).json({newData})
        } catch (err) {
            next(err)
        }
}
exports.deleteChild = (req,res,next)=>{
    try {
        const id = req.params.id;
        childModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            next(error)
        });
    }
    catch (error) {
        next(error)
    }}

exports.getChildById = (req,res,next)=>{
    try {
        const id = req.params.id;
        childModel.findOne({_id:id}).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            next(error)
        });
    }
    catch (error) {
        next(error)
    }
}