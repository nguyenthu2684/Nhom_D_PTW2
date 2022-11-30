const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, 'uploads')
    },
    filename: function (_req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage });

module.exports = upload;