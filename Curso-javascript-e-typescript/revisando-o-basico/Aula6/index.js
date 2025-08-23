/*
Luiz Otávio Miranda tem 30  anos, pesa 84 kg
tem 1.8 de altura e seu imc é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;


let imc = 84 / (1.80 * 1.80); // peso / (altura * altura)
let anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, ' kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // Maneira ideal
console.log(nome, 'nasceu em', anoNascimento, '.'); 
