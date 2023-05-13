
/* Iteracion #1: 
Encontrar el maximo */
function maxOfTwoNumbers(numUno, numDos) {
    if (numUno > numDos) {
        return numUno;
    } else {
        return numDos;
    }
}

/* Iteracion #2:
Encontrar la palabra mas larga */
const followingWords = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(matrizDePalabras) {
    if (matrizDePalabras.length === 0) return null;
    let palabraMasLarga = '';
    for (let i = 0; i < matrizDePalabras.length; i++) {
        if (palabraMasLarga.length < matrizDePalabras[i].length) {
            palabraMasLarga = matrizDePalabras[i];
        }
    }
    return palabraMasLarga;
};
console.log(`Iteration 002`);
console.log(findLongestWord(words));
console.log(`----------------`);
findLongestWord(words);

/* Iteracion #3:
Calcular la suma */
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbersEmpty = [];
function sumNumbers(matrizDeNumeros) {
    if (matrizDeNumeros.length === 0)
        return 0;
    let suma = 0;
    for (let i = 0; i < matrizDeNumeros.length; i++) {
        suma += matrizDeNumeros[i];
    }
    return suma;
}
console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbers)}`);
console.log(`La suma total de la matriz 'numbers' es de ${sumNumbers(numbersEmpty)}`)

/* Iteracion #4 :
Calcular la media 
Nivel 1: Matriz de números */
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(promedio) {
    let resultado = promedio.length;
    return sumNumbers(promedio) / resultado;
}
let promedio = averageNumbers(numbersAvg);
console.log(promedio);

// Nivel 2: Matriz de cadenas
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arrayDePalabras) {
    if (arrayDePalabras.length === 0) return 0;
    let sumaTotal = 0;
    for (let i = 0; i < arrayDePalabras.length; i++) {
        sumaTotal += arrayDePalabras[i].length;
    }
    let operacionMatematica = sumaTotal / arrayDePalabras.length;
    console.log(operacionMatematica);
};
averageWordLength(wordsArr);

/* Iteracion #5: 
Arreglos únicos */
const wordsBelow = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
];

function uniquifyArray(wordArray) {
    if (wordArray.length === 0) return null;
    let arrayLimpio = [];
    // forEach
    wordArray.forEach((elemento) => {
        // includes()
        if (!arrayLimpio.includes(elemento)) {
            arrayLimpio.push(elemento);
        }
    })
    console.log(arrayLimpio);
    return arrayLimpio;
}
uniquifyArray(wordsUnique);
const uniqueArr = (wordArray) => {
    let arrayLimpio = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (arrayLimpio.indexOf(wordArray[i]) === -1) {
            arrayLimpio.push(wordArray[i]);
        }
    }
    console.log(arrayLimpio);
    return arrayLimpio;
};
uniqueArr(wordsUnique);

/* Iteración #6: 
Buscar elementos */
const wordsToFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(arrayDePalabras, palabraABuscar) {
    if (arrayDePalabras.includes(palabraABuscar)) {
        console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
        return true;
    } else {
        console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
        return false;
    }
}
function doesWordExistEmilio(arrayDePalabras, palabraABuscar) {
    for (let i = 0; i < arrayDePalabras; i++) {
        if (arrayDePalabras[i] === palabraABuscar) {
            console.log(`Palabra - ${palabraABuscar} se encuentra dentro del array`);
            return true;
        }
        console.log(`Palabra - ${palabraABuscar} no se encuentra dentro del array`);
        return false;
    }
}
doesWordExist(wordsFind, 'subset');
doesWordExistEmilio(wordsFind, 'subset');

/* Iteración #7: 
Contar la repetición */
const words = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

function howManyTimes(wordsArr, wordSearch) {
    return wordsArr.filter(elm => elm === wordSearch).length
}