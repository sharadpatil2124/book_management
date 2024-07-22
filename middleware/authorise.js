const jwt = require ('jsonwebtoken');

const authorise = (req,res,next) =>{
    const token = req.header('Authorization');
    const bearerWord = token.split(" ")[0].trim();
    console.log("$$$")
    const bearerToken = token.split(" ")[1];
    console.log(bearerToken)
    if (bearerWord!= "Bearer"){
       return res.status(403).json({ message: 'Invalid Header'});
    }
    if(!bearerToken){
       return res.status(401).json({message : 'No token, authorization denied'});
       
    }
    try {
        const decoded = jwt.verify(bearerToken,'sharad');
        req.user = decoded;
        console.log(decoded)
        next();
    } catch (error) {
        res.status(401).json({message : 'Token is not valid'});
    }
};

module.exports = authorise;