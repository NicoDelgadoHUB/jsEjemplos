function ejercicio6() {

   let par = prompt("Ingres un numero para verificar si es par o impar");

   let result = paroImp(par);

   console.log(result);
}

function paroImp(num){
    if(num == 0){
        return "El numero es invalido";

    }

    if(num % 2 == 0){
        return "El numero es par";
    }
    else{
        return "El numero es impar";
    }
}

    
    
