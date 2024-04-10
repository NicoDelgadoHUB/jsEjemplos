function ejercicio8(){
    let palin = prompt("Ingresa un palidromio: ");
  
    let result = EsPalindromio(palin) 
  
    console.log(result);
  
  }
  function EsPalindromio(dromio){
          // Convertir la cadena a minúsculas y eliminar los espacios en blanco
          dromio = dromio.toLowerCase().replace(/\s/g, '');
      
          // Comparar la cadena original con la cadena invertida
          //Entonces básicamente toma la cadena original, la divide en un array de caracteres, invierte el orden de los caracteres y luego los une 
          if (dromio === dromio.split('').reverse().join('')) {
              console.log("'" + dromio + "' es un palíndromo.");
          } else {
              console.log("'" + dromio + "' no es un palíndromo.");
          }    
  }