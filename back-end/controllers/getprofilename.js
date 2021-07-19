let enrollmentsT = require('../model/login/Teacher');
let enrollmentsS = require('../model/login/Students');


exports.getprofilename = async (req,res) => {

    if(req.body.type==="teacher"){
        const result = await enrollmentsT
            .findById(req.body.profileId);
        console.log(result)
        if (result) {
            res.status(200).send(
                {message: "Request found!" , status: true, items : result.fullName }
            );
        }else{
            console.log("no Request")
        }
    }
    else{
        const result = await enrollmentsS
            .findById(req.body.profileId);
        if (result) {
            res.status(200).send(
                {message: "Request found!" , status: true, items : result.fullName }
            );
        }else{
            console.log("no Request")
        }
    }
}