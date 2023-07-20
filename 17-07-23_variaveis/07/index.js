//criação das variáveis
let popInicialInfectados = 1_000;
let pessoasQuePodeSerInfec = 4;
let tempoPercorridoDias = 100;
let popFinalInfectados;

//cálculo de quantas pessoas estarão infectadas 
popFinalInfectados = popInicialInfectados * Math.pow(pessoasQuePodeSerInfec, tempoPercorridoDias/7);
console.log(`O número de pessoas infectadas após ${tempoPercorridoDias} dias é ${Math.round(popFinalInfectados)}.`);