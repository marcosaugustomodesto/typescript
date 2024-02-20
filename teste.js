"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa = { nome: "marcos", email: "marcos@gmail.com", cel: "11997715686" };
console.log(pessoa);
var numero = 5;
var numero2 = 2;
var sum = numero + numero2;
console.log(sum);
function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(numero, numero2));
var multiply = function (numero1, numero2) {
    return numero1 * numero2;
};
var multiplicacao = multiply(numero, numero2);
console.log(multiplicacao);
var heroes = ['thor', 'iron man', 'hulk'];
var teste = heroes.map(function (hero) {
    return "super hero is ".concat(hero);
});
console.log(teste);
