function ejercicio7() {

    let letra = prompt("Ingresa un letra: ");

  let result = caramaymi(letra)

  console.log(result);

}
function caramaymi(txt){
    let may = 0;
    let min = 0;

    for(let i = 0; i < txt.lenght; i++){

    if(txt.charAt(i) === txt.charAt(i).toUpperCase()) {
         may++;
    } else if(txt.charAt(i) === txt.charAt(i).toLowerCase()) {
        min++;
    }
    }

    if(may == 0){
        return "son todas minusculas";
    }else if (min == 0){
        return "son todas mayusculas";
    }else{
        return "son todas mayusculas y minusculas";
    }
    

}