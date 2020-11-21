const model = require('../dbcon/dbcon');

exports.signin = async (req, res)=>{
    const {userId, password} = req.body;
    if(userId == ""||password == ""){
        res.status(400).json({
            message:"빈칸이 존재합니다"
        });
    }
    try {
        const findUser = await model.User.findOne({raw:true,where:{userId: userId}});
        if(!findUser){
            console.log('cant find user');
            res.status(401).json({
                message:"server couldn't find your Id"
            })
        }

        if(findUser.password == password){
            console.log('signin success');
            res.json({
                result:1
            })
        }else{
            console.log('your password is wrong');
            res.status(401).json({
                message:'your password is wrong'
            })
        }
    } catch (err){
        console.log('signin error');
        console.log('err is ', err);
        res.status(500).json({
            message:'sorry server has error'
        })
    }
}