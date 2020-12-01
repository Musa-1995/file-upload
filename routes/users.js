var express = require('express');
var router = express.Router();

var express = require('express');
var multer  = require('multer');
var path = require('path');
var storage = require('../config/multer');


var upload = multer({ storage: storage });


router.post('/profile', upload.single('avatar'), function (req, res, next) {
  res.json('image uploaded');
  
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
