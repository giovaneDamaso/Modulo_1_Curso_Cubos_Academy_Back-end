//Valores em reais
const valorDoProduto = 129.99;
const meuDinheiro = 80;

//calcular desconto
const desconto = valorDoProduto - meuDinheiro;

//valor do desconto percentual
const descontoPercentual = (meuDinheiro * 100) / valorDoProduto;

//valor do desconto percentual no console [método .toFixed(2) para mostrar 2 números depois vírgula]
console.log(`O valor do desconto percentual é ${descontoPercentual.toFixed(2)}%.`);