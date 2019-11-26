var csv = require('fast-csv');
var fs = require('fs');
var arrayToJson= require('./arrayToJson')


exports.csvToArray = (file) => {
    var json;
    var fileRows = []
    csv.parseFile(file)
        .on("data", (data) => {
            if (!data[0].startsWith('Emne:') && data[0]!="") {
                
                    fileRows.push(data);
                }
        })
        .on("end", () => {
            fs.unlinkSync(file)
            
            json = arrayToJson.arrayToJson(fileRows)
           
        })

        console.log(json)
        return json;
}