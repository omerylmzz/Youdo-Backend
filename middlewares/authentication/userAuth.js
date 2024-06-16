const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.header("X-Auth-User-Token");

    if (!token){
        return res.send({SUCCESSFUL: false, MESSAGE: "You have no authorization"});
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        req.user = decodedToken;
        next();
    }
    catch (exeption){
        res.send({SUCCESSFUL: false, MESSAGE: "Incorrect token value"});
    }

}

module.exports = auth;