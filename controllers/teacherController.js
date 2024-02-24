exports.getAllTeachers = (req,res,next)=>{
    res.json({data:"All Teachers Data"})
}

exports.addNewTeacher = (req,res,next)=>{
    res.json({data:"new Teacher Added successfully"})
}

exports.updateTeacher = (req,res,next)=>{
    res.json({data:"Teacher Data Updated successfully"})
}

exports.deleteTeacher = (req,res,next)=>{
    res.json({data:"Teacher Deleted successfully"})
}

exports.getTeacherByid = (req,res,next)=>{
    res.json({data:"Get Teacher Data By Id successfully"})
}

exports.getAllSupervisors = (req,res,next)=>{
    res.json({data:"Get All Supervisors Data"})
}
