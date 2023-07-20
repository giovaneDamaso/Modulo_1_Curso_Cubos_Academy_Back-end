const diaDaSemana = 3;

const diasDaSemana = ["Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta Feira", "Sábado", "Domingo"];

//checar se o dia da semana é válido
if (diaDaSemana < 1 || diaDaSemana > 7) {
    console.log("O dia da semana informado não é válido.")
}
//checar qual dia da semana corresponde ao número
else {
    console.log(diasDaSemana[diaDaSemana - 1]);
};