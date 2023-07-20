//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago === valorDoProduto) {
    //valor de cada parcela reais
    const valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
    //quantidade de parcelas restantes
    const parcelasRestantes = (valorDoProduto / 100 - valorPago) / valorParcela;
    console.log(`Restam ${Math.round(parcelasRestantes)} parcelas de R$${valorParcela.toFixed(2)}`);
} else {
    console.log("O produto já foi pago");
};