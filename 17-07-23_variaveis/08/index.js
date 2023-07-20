//Medidas do círculo
let comprimentoCirculo;
let areaCirculo;
let raioCirculo = 1;
let pi = Math.PI;

//Calcular comprimento do círculo
comprimentoCirculo = 2 *(pi * raioCirculo);
console.log(`O comprimento do círculo é ${comprimentoCirculo.toFixed(2)}.`);

//Calcular área do círculo
areaCirculo = pi * (raioCirculo ** 2);
console.log(`A área do círculo é ${areaCirculo.toFixed(2)}.`);