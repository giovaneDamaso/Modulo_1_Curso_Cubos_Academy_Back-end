const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido != "" && primeiroNome != "") {
    console.log(apelido);
} else if (sobrenome != "" && primeiroNome != "") {
    console.log(`${primeiroNome} ${sobrenome}`);
} else if (primeiroNome != "") {
    console.log(primeiroNome);
} else {
    console.log("O preenchimento do primeiro nome é obrigatório!");
};