const JWT=require("jsonwebtoken");
exports.isAuth = (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.headers['authorization']) {
            next('Not authenticated');
        }
        let token = req.headers['authorization'].split(" ")[1];
        let decodedToken = JWT.verify(token, process.env.JWT_SECRET);
        req.token = decodedToken;
        console.log(decodedToken);
        next();
    } catch (error) {
        // Modify error object and pass it to next middleware
        error.message = "Not authenticated";
        error.status = 401;
        next(error);
    }
}

exports.isAdmin=(req,res,next)=>{
    if(req.token.role=="teacher"){
        let error=new Error("not authorized");
        error.status=403;
        next(error);
    }
    else{
        next()
    }
}