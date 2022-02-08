//exercicio com variaveis

let varA = 'a'; //b
let varB = 'b'; //c
let varC = 'c'; //a

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);
