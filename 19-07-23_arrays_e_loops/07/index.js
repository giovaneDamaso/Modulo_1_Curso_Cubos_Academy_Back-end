const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComAinincial = [];
for (let nome of nomes) {
    if (nome[0] === "a" || nome[0] === "A") {
        nomesComAinincial.push(nome);
    }
};
console.log(nomesComAinincial);