//valores do financiamento
const montante = 90_000;
const capitalInicial = 60_000;
const numDeMeses = 24;

//cálculo da taxa de juros
const taxaDeJuros = Math.pow(montante / capitalInicial, 1 / numDeMeses) - 1;
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${(taxaDeJuros*100).toFixed(3)}%, 
pois após ${numDeMeses} meses você teve que pagar ${montante} reais.`);