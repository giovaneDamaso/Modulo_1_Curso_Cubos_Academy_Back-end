//exemplo 1
// const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

//exemplo 2
const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    if (filaDeFora[0] === undefined) {
        break;
    }
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
};
console.log(filaDeDentro);
console.log(filaDeFora);