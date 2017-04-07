class Perro{
    constructor(nombre){
        this.nombre = nombre;
    }

    ladra(){
        console.log("GUAU");
    }

    mover(parte, callback){

        switch(parte){
            case "COLA":

                var veces = 0;
                var int = setInterval(function(){
                    console.log("moviendo cola...");
                    veces+=1;

                    if(veces>5){
                        clearInterval(int);
                        callback(null, "ME CANSE", veces);
                    }
                }, 1000);
                break;

            default:
                var ERROR = {
                    message: "NO TENGO " + parte
                }
                callback(ERROR);
        }

        

        callback(null, "ACABADO");
    }
}

module.exports = Perro;     // esta linea es para que este disponible para otros metodos