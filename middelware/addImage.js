const multer = require('multer');

exports.addImage = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'images');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    })
}).single('image');
