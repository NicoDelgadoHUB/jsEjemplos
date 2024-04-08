function ejercicio6() {
    let par = prompt("Ingres un numero para verificar si es par o impar");//par es parametro

    let result = paroImp(par);//paroImp sirve para relacionar let result con otra funcion (function paro Imp(num)).Para que se mas organizado
 
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
    