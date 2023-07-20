//exemplo 1
const disjuntores = [false, false, true, false, false, true, false, false];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i] === true) {
        console.log(i);
    };
};
console.log("____")
//exemplo 2
const disjuntores2 = [false, true, true, false, false, true, false, false, true, true];

for (let i = 0; i < disjuntores2.length; i++) {
    if (disjuntores2[i] === true) {
        console.log(i);
    };
};