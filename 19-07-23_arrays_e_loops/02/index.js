const letras = ["A", "a", "B", "C", "E", "e"];

let numDeLetrasE = 0;
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        numDeLetrasE++;
    }
};

if (numDeLetrasE > 0) {
    console.log(`Foram encontradas ${numDeLetrasE} letras "E" ou "e"`);
} else {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
};