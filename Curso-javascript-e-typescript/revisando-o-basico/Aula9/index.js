//**
// * Aritméticos
// * + Adição / Concatenação
// * - Subtração
// * / Divisão
// * * Multiplicação
// * ** Potencialização 
// * % Resto da divisão
// */

/*
Incremento = ++
Decremento = --

Operadores de atribuição
**=
+=


*/


const passo = 50;
let contador1 = 0

contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);

let contador2 = 2;
contador2 += 2; // contador = contador + 50
contador2 += 2;
contador2 += 2;
console.log(contador2)

let contador3 = 0;
contador3 *= 2;
contador3 += 2;
contador3 -= 2;
contador3 /= 2;
contador3 **= 10;
console.log(contador3);


// NaN - Not a number ~ parseInt (inteiro), parseFloat(Decimais)
const num1 = 10;
const num2 = Number('Luiz');

console.log(num1 + num2);
console.log(typeof num2);

