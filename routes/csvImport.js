var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

var csvTOArray = require('../public/javascripts/csvToArray')

var upload = multer({ dest: 'tmp/csv/' });

router.get('/', function (req, res, next) {
    res.render('CSVimport');
});

router.post('/', upload.single('Helpdesk'), (req, res, next) => {

    var file = req.file.path;
    var json = csvTOArray.csvToArray(file);



    res.send("File is uploaded")

    console.log(json);

})

module.exports = router;
