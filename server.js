var fs = require("fs");     //ECMASCRIPT 5
// import FS from 'fs';  //ECMASCRIPT 6/7

var Perro = require("./Perro");

fs.readFile("README.txt","UTF-8", function(err, data){

    //Maneja error y no continuar
    if(err){
        return console.error(err);
    }

    //mostrar data
    console.log(data);

});

var perro = new Perro("perro peruano");

perro.ladra();
perro.mover("COLA", function(error, data1, data2, data3, data4, data5){

    if(error){
        console.error("ERROR!!!!", error.message);
        return;
    }else{
        console.log("Mi perror acabo ---->", data1, data2, data3, data4, data5);
    }

});

console.log(perro);