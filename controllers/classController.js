exports.getAllClasses = (req,res,next)=>{
    res.json({data:"All Classes Data"});
}
exports.getClassById = (req,res,next)=>{
    res.json({data:"Get Class Data By Id"});
}
exports.addNewClass = (req,res,next)=>{
    res.json({data:"New Class Added Successfully"});
}
exports.updateClass = (req,res,next)=>{
    res.json({data:"The Class updated Successfully"});
}
exports.deleteClass = (req,res,next)=>{
    res.json({data:"The Class deleted Successfully"});
}

exports.getAllClassChildern = (req,res,next)=>{
    res.json({data:"Class Childern Information"});
}

exports.getAllClassSupervisors = (req,res,next)=>{
    res.json({data:"All Class Supervisors"});
}