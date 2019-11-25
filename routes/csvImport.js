var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var csv = require('fast-csv');
var arrayToJson= require('../public/javascripts/arrayToJson')

var upload = multer({ dest: 'tmp/csv/' });

router.get('/', function (req, res, next) {
    res.render('CSVimport');
});

router.post('/', upload.single('Helpdesk'), (req, res, next) => {
    var fileRows = [];
    csv.parseFile(req.file.path)
        .on("data", (data) => {
            if (!data[0].startsWith('Emne:')) {
                if (data[0]!="") {
                    fileRows.push(data);
                }
            }
        })
        .on("end", () => {
            fs.unlinkSync(req.file.path)
            arrayToJson.arrayToJson(fileRows)
        })
    res.send("File is uploaded")

})

module.exports = router;
