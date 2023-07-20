const jogada1 = "papel";
const jogada2 = "tesoura";

//seu código aqui

//jogadas tesoura x pedra
if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1);
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log(jogada2);
//jogadas papel x pedra
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1);
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log(jogada2);
//jogadas tesoura x papel
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(jogada1);
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log(jogada2);
//empate
} else {
    console.log("empate");
};