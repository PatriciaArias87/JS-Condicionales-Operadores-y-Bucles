
/*Crear una variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2.*/


let booleano1 = true
let booleano2 = false

let booleAnd = booleano1 && booleano2;

let booleanoOr = booleano1 || booleAnd;   // Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2.

let booleanoNot = !booleano1;   //Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1



/*Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) 
and (booleano1 or (not booleano1 and not booleano2).*/

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));



/*2. Operadores
Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado.*/

let valorDivision = 17 / 3;
valorDivision = valorDivision.toFixed(2);

console.log(valorDivision);

console.log("El resultado de la división con dos decimales es:", valorDivision);



//Crear variable valorResto cuyo valor sea el resto de 17 entre 7.*/

let valorResto = 17 % 7;

console.log("El resto es:", valorResto);



/*Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string
 con el número 9. Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”.
 ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?*/


let A = 9;
let B = "9";

// Comprobar si A es igual a B, detecta iguales ya que el contenido es el mismo:

    if (A == B) {
     console.log("Son iguales");} 

    else {
     console.log("No son iguales");}

// Lo que sucede si añadimos 3 = es que se convierte en estricto y detecta que uno es un string:

    if (A === B) {
      console.log("Son iguales");} 
  
    else {
      console.log("No son iguales");}
  



/*Crea una variable mochila que sea un array de elementos. 
Desarrolla la lógica para que: 
a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”; 
b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,
muestre por consola “Creo q no necesito una mochila”.*/

 let mochila = [1,2,3,4,5,6,7,8,9,10,11];


   if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");} // Al añadir 11 elementos me aparece este mensaje en consola
     
   else if (mochila.length >= 2 && mochila.length <= 10) {
    console.log("Qué bien voy con mi mochila");} 
  
   else {
  console.log("Creo que no necesito una mochila");}





//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.

let contarHasta10 = 0;

for (let i = 0; i < 10; i++) {
    contarHasta10++;
}

console.log("El valor final de contarHasta10 es:", contarHasta10);


/*Crea una variable diaFestivo que sea de tipo boolean. 
Crea un ternario en el que si diaFestivo es true devuelva un console.log de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.*/

let diaFestivo = false;

diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');


//Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.

let arrayBucle = [];

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);}

console.log(arrayBucle);


//Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.

let resultado = 0;

for (let i = 0; i < arrayBucle.length; i++) {
    resultado += arrayBucle[i];
}

console.log(resultado);


/*Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], 
recorrelo utilizando el bucle for of y muestra por consola todos sus elementos.
 Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.*/

 const array = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

 // Utilizando el bucle for...of
 console.log('Recorriendo con bucle for...of:');
 for (let elemento of array) {
     console.log(elemento);
 }

// Utilizando el bucle for...in
console.log('\nRecorriendo con bucle for...in:');
for (let indice in array) {
    console.log(array[indice]);}



//Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
      console.log("Patata");
  }
}


  
//Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },


  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];


//Crea un array con la gente cuyo nombre tiene 4 letras sin utilizar el método filter de los arrays y muéstralo por consola.

let genteCuatroLetras = [];

for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.length === 4) {
        genteCuatroLetras.push(gente[i]);
    }
}

console.log(genteCuatroLetras);



/*Crea un array con la gente cuyo nombre empieza por J y sean menores de 40 años sin utilizar el método
 filter de los arrays y muéstralo por consola.*/

 let genteConJMenoresDe40 = [];

 for (let i = 0; i < gente.length; i++) {
     if (gente[i].nombre.startsWith("J") && gente[i].edad < 40) {
         genteConJMenoresDe40.push(gente[i]);
     }
 }
 
 console.log(genteConJMenoresDe40);



 
//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

let ordenador = {
  marca: "La pava"
};


// TEST 1

if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}



// TEST 2

if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
