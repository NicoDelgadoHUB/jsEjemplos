function ejercicio4() {

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    let dni = document.querySelector("#dni").value;
    let letraUser = document.querySelector("#letra").value;

   
    if (dni > 0 && dni < 99999999) {
        let nletra = dni % 23;

        let letra = letras[nletra];

        if(letra == letraUser) {
            console.log("Las Letras son iguales")
        }else{
            console.log("La letrs ingresada es incorrecta");
        }

        console.log("La letra de tu DNI es: "+ letra);
    }else {
        console.log("El dni ingresado es incorrecto");
    }
    //console.log(d);
}