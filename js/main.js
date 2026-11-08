/*Ejercicio 1: Intercambio de valores usando desestructuración

Intercambia los valores de dos variables usando desestructuración.

let a = 5, b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5 */

/* Ejercicio 2: Obtener el segundo elemento de un array

Escribe una función que retorne el segundo elemento de un array.

function segundoElemento([, dos , , ]) {
    return dos;
};

console.log(segundoElemento([1, 2, 3, 4]));
console.log(segundoElemento(["a", "b", "c", "d"]));*/

/* Ejercicio 3: Desestructuración de un objeto con valores por defecto

Extrae la propiedad nombre de un objeto. Si no está presente, asigna el valor 'Desconocido'. 

const persona = { edad: 25 };
const {nombre = "Desconocido", edad} = persona;
console.log(nombre);
console.log(edad);*/

/* Ejercicio 4: Sumar elementos de un array desestructurado

Crea una función que Desestructura un array con al menos 3 elementos y devuelve la suma de los primeros tres.

function sumarArray ([ a, b, c, d, e]) {
    return a + b +c
};
console.log(sumarArray ([7, 8, 3, 6, 1 ]));
console.log(sumarArray ([65, 782, 14223, 999, 1511 ])); */

/* Ejercicio 5: Desestructuración con Rest para obtener elementos restantes 
Escribe una función que retorne todos los elementos excepto el primero de un array. 

function sinPrimero ([, ...restantes]) {
    return restantes
}
console.log(sinPrimero (["agua", "leon", "café, leche, almohada"]));*/

/* Ejercicio 6: Desestructurar un objeto anidado

Extrae las propiedades nombre y pais de la variable persona.

const personaje = {
  nombres: "Roberto",
  direccion: {
    ciudad: "Quito",
    pais: "Ecuador",
  },
};
const {nombres, direccion: {pais}} = personaje;
console.log(nombres); 
console.log(pais); */

/* Ejercicio 7: Desestructuración de múltiples objetos

Desestructura dos objetos y combina sus propiedades en uno solo. 

const persona2 = { nombre: "Ana", edad: 28 };
const detalles = { profesion: "Ingeniera", pais: "España" };
const {nombre, edad} = persona2;
const {profesion, pais} = detalles;
console.log(nombre, edad, profesion, pais);*/

/* Ejercicio 9: Desestructurar un array de objetos

Extrae el nombre del segundo objeto en un array. */

const personas = [{ nombre: "Juan" }, { nombre: "Pedro" }];
const nombreSegundo = personas[1].nombre;
console.log(nombreSegundo); 


