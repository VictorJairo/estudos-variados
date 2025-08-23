// Não podemos criar constantes com palavras reservadas
// let, console, if (Algumas palavras reservadas)

// É sempre bom criar uma constante com um nome significativo 

// Não pode começar o nome de uma constante com um número

// Não podem conter espaços ou traços
// Utilizamos camelCase

// Os nomes das constantes são Case-sensitive

// Não pode modificar o valor de uma constante

// Não utilize VAR, UTILIZE CONST

const nome = 'João';

// + - * / 
// String = Text 
// Number = Número
const primeiroNumero = '5'; 
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);

console.log( typeof (primeiroNumero + segundoNumero )) ;