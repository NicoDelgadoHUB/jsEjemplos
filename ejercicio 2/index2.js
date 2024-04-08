function ejercicio2() {
    var valores = [true,5,false,"hola","adios",2];

    if(valores[3].length<valores[4].lenght){
        console.log("adios es mas grande que hola");
        console.log(valores[0]);

    }
    else{
        console.log("hola es mas chico que adios");
        console.log(valores[2]);
    }
    console.log(valores[1]+valores[5]);
    console.log(valores[1]-valores[5]);
    console.log(valores[1]*valores[5]);
    console.log(valores[1]/valores[5]);
}