const original = [5, 7, 13, 17, 26, 34, 118, 245];

const originalNovo = [];
for (let numero of original) {
    if (numero >= 10 && numero <= 20) {
        originalNovo.push(numero);
    } else if (numero > 100) {
        originalNovo.push(numero);
    }
};
console.log(originalNovo);