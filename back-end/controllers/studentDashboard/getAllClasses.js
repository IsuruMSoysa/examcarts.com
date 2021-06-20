let classes = require('../../model/Classes/Classes')

exports.getAllClasses = async (req,res) => {
    const result = await classes
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