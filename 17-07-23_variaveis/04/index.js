//Valores
let valorMontante; 
let valorCapital = 1000;
let taxaDeJuros = 12.5;
let periodoDeTempo = 5;

//Cálculo do montante acrescido dos juros compostos [utilizando método toFixed(2) para mostrar 2 casas decimais]
valorMontante = valorCapital * (1 + taxaDeJuros/100)** periodoDeTempo;
console.log(`O valor do montante é ${valorMontante.toFixed(2)}.`)