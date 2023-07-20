const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//utilizando loop for of
console.log("utilizando loop for of:")

for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    };
};
console.log(pares);
console.log(impares);

//utilizando loop while
console.log("utilizando loop while:")
const paresWhile = [];
const imparesWhile = [];

let indice = 0;
while (indice < original.length) {
    if (original[indice] % 2 === 0) {
        paresWhile.push(original[indice]);
    } else {
        imparesWhile.push(original[indice]);
    };
    indice++;
};
console.log(paresWhile);
console.log(imparesWhile);

//utilizando loop for c
console.log("utilizando loop for c:")
const paresForC = [];
const imparesForC = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        paresForC.push(original[i]);
    } else {
        imparesForC.push(original[i]);
    };
};
console.log(paresForC);
console.log(imparesForC);