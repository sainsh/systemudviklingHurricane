
module.exports.arrayToJson = (array) => {

    var cols= []
    var jsonString ='[';
    var currentArray = [];

    array[0].forEach(element => {
        cols.push(element);
    });

    for(var i =1; i< array.length; i++){
        currentArray = array[i]
        jsonString += '{'
        for(var j = 0; j < currentArray.length; j++){
            jsonString += `"${cols[j]}": "${currentArray[j]}"`;
            if(j<currentArray.length-1){
                jsonString += ',';
            } else{
                jsonString += '}';
                if(i < array.length-1){
                    jsonString += ',';
                }
            }
        }
    }
    jsonString += ']';

    var json = JSON.parse(jsonString);
    console.log(json);
  
}