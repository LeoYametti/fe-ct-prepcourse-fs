/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
  let primerLetra = nombre[0];
  let letraMayuscula = primerLetra.toUpperCase();
  let unir = nombre.slice(1);
  return letraMayuscula + unir;
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  let resultado = 0;
  for (i = 0; i < arrayOfNumbers.length; i++) {
    resultado = resultado + arrayOfNumbers[i];
  }
  cb(resultado);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach((i) => {
    cb(i);
  });
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const nuevoArreglo = array.map((elemento) => cb(elemento));
  return nuevoArreglo;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  const nuevoArreglo = arrayOfStrings.filter((elemento) => {
    if (elemento[0] == "a") {
      return elemento;
    }
  });
  return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
