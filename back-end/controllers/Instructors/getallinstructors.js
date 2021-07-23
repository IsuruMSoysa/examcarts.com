let instructors = require('../../model/login/Instructor')

exports.getallinstructors = async (req,res) => {
    const result = await instructors
        .find( );
    if (result) {
        res.status(200).send(
            {message: "Classes found!" , status: true, items : result },

        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}