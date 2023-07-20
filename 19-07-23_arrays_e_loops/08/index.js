const numeros = [3, 24, 1, 8, 11, 7, 15];

//utilizando método
console.log(Math.max(...numeros));

//solução alternativa
let numeroAtual = numeros[0];
for (let numero of numeros) {
    if (numero > numeroAtual) {
        numeroAtual = numero;
    }
};
console.log(numeroAtual);