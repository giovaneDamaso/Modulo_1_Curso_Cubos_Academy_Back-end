const caractere = "A";

const vogaisMinusculas = ["a", "e", "i", "o", "u"];
const vogaisMaiusculas = ["A", "E", "I", "O", "U"];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

if (vogaisMinusculas.includes(caractere)) {
    console.log("Vogal minúscula");
} else if (vogaisMaiusculas.includes(caractere)) {
    console.log("Vogal maiúscula");
} else if (numeros.includes(caractere)) {
    console.log("Número");
} else {
    console.log("Consoante");
};