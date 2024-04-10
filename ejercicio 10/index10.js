function ejercicio10(){
    // Función para simular el lanzamiento de un dado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
}

// Función para simular el lanzamiento de dos dados y sumar los resultados
function lanzarDados() {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    return dado1 + dado2;
}

// Array para almacenar el número de apariciones de cada suma
let conteoSumas = [0,0,0,0,0,0,0,0,0,0,0,0,0]; // Creamos un array con 11 elementos, índices 2 al 12 para representar las sumas de 2 a 12

// Simulamos 36,000 lanzamientos de dos dados
for (let i = 0; i < 36000; i++) {
    let suma = lanzarDados();
    conteoSumas[suma]++; // Restamos 2 porque los índices del array comienzan en 0 pero las sumas van de 2 a 12
}

// Imprimir los resultados
console.log("Número de apariciones de cada suma:");
for (let i = 2; i < conteoSumas.length; i++) {
    console.log("Suma " + (i) + ": " + conteoSumas[i]);
}
}