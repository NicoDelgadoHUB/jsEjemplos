function ejercicio5() {

    let factor = prompt("Ingrese un numero para calcular el factorial");
    
    let producto = 1;
    for (let i = 1; i <= factor; i++) {
        producto = producto * i;

    }

    console.log("el factorial de "+ factor + " es: "+producto);
}