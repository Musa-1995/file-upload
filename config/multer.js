var multer  = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: './profile/uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

  module.exports = storage;