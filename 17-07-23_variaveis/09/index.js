//medidas do polígono
let somaDosAngulos;
let numDeLados = 6;
let anguloEmGraus;

//cálculo da soma dos ângulos internos do polígono
somaDosAngulos = (numDeLados - 2) * 180;
console.log(`O valor da soma dos ângulos do polígono é ${somaDosAngulos}º.`);

//cálculo do valor de cada ângulo do polígono
anguloEmGraus = somaDosAngulos / numDeLados;
console.log(`O valor de cada ângulo do polígono em graus é ${anguloEmGraus}º.`);