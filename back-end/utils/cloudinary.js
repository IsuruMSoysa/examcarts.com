require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    //cloud_name: process.env.CLOUDINARY_NAME,
    //  api_key : process.env.CLOUDINAY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET
    cloud_name: 'examcarts',
    api_key : '415457247462691',
    api_secret: 'JEbeQV7ioFXgKKFdpxIlH9TjOlY',
    secure: true

});

module.exports = {cloudinary};

