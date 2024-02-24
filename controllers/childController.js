exports.getAllChildern = (req,res,next)=>{
    res.json({data:'All children Data'})
}

exports.addNewChild = (req,res,next)=>{
    res.json({data:'New Child Added Successfully'})
}
exports.updatechild = (req,res,next)=>{
    res.json({data:'Child Data Updated Successfully'})
}
exports.deleteChild = (req,res,next)=>{
    res.json({data:'Child deleted Successfully'})
}

exports.getChildById = (req,res,next)=>{
    res.json({data:'Get Child By Id Successfully'})
}