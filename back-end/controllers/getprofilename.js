let enrollmentsT = require('../model/login/Teacher');
let enrollmentsS = require('../model/login/Students');
let enrollmentsI = require('../model/login/Instructor');


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
    else if (req.body.type==="instructor"){
        const result = await enrollmentsI
            .findById(req.body.profileId);
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

