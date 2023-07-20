const numeros = [8, 11, 4, 1];

// seu codigo aqui

//utilizando métodos
console.log(Math.max(...numeros) - Math.min(...numeros));

//solução alternativa
let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    } else if (numero < menorNumero) {
        menorNumero = numero;
    }
};
console.log(maiorNumero - menorNumero);