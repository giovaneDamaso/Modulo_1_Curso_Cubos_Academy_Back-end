const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

if (arrayA.length === arrayB.length) {
    //utilizando método
    for (let i = 0; i < arrayA.length; i++) {
        console.log(Math.min(...[arrayA[i], arrayB[i]]));
    };

    //solução alternativa
    console.log("solução alternativa");
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] <= arrayB[i]) {
            console.log(arrayA[i])
        } else if (arrayB[i] <= arrayA[i]) {
            console.log(arrayB[i])
        };
    };
} else {
    console.log("Arrays com quantidade de elementos diferentes!");
};