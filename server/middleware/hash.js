const crypto = require('crypto');
const secret = 'sibal';
exports.hash_password = (req,res,next)=>{
    const password = req.body.password;
    const hashPassword = crypto.createHash('sha256', password).update(secret).digest('hex');
    console.log('password hash done');
    req.body.hashPassword = hashPassword;
    next();
}