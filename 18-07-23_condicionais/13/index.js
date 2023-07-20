//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinalProdutoReais;

if (tipoDePagamento === "credito") {
    valorFinalProdutoReais = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
    console.log(`Valor a ser pago: R$${valorFinalProdutoReais.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    valorFinalProdutoReais = (valorDoProduto - (valorDoProduto * 0.03)) / 100;
    console.log(`Valor a ser pago: R$${valorFinalProdutoReais.toFixed(2)}`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    valorFinalProdutoReais = (valorDoProduto - (valorDoProduto * 0.1)) / 100;
    console.log(`Valor a ser pago: R$${valorFinalProdutoReais.toFixed(2)}`);
} else {
    console.log(`O tipo de pagamento "${tipoDePagamento}" não consta no sistema`);
};