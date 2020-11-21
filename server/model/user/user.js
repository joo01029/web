const model = require('../dbcon/dbcon');

exports.signin = async (req, res)=>{
    const {userId, password} = req.body;
    if(userId == ""||password == ""){
        res.status(400).json({
            message:"There is a blank"
        });
    }
    try {
        const findUser = await model.User.findOne({raw:true,where:{userId: userId}});//select user
        console.log(findUser)
        if(!findUser){//if server can't find user
            console.log('cant find user');
            res.status(401).json({
                message:"server couldn't find your Id"
            })
        }

        //if server can find user
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

exports.signup = async (req, res)=>{//signup 
    const {userId, password, userName} = req.body;

    if(!userId||!password||!userName){//if req has null
        res.status(400).json({
            message:'There is a blank'
        })
    }
    //else
    try{
        const findUser = await model.User.findOne({raw:true, where:{userId:userId}});
        if(findUser){
            console.log('user is already exists');
            res.status(401).json({
                message:"user is already exists"
            })
        }
        const createUser = await model.User.create({userId:userId, password:password, userName:userName});
        console.log(createUser.toJSON());
        res.json({
            result:1,
            message:'signup success'
        })
    }catch(err){
        console.log('signup error', err);
        res.status(500).json({
            message:'sorry server has error'
        })
    }
}