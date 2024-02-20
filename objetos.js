"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourse(curso) {
    var _id = Math.random() * 1000;
    return { id: _id, name: curso.nome, price: curso.preco };
}
var curso = { nome: 'react-native', preco: 1000.0 };
console.log(createCourse(curso));
function toStringUser(_a) {
    var nome = _a.nome, email = _a.email, telefone = _a.telefone;
    console.log("Nome: ".concat(nome, " Email:").concat(email, " Telefone: ").concat(telefone));
}
var user = { nome: "marcos", email: "marcos@gmail.com", telefone: "(11)997715686" };
toStringUser(user);
var userNovo = {
    _id: "12345678",
    nome: 'marcos',
    email: 'marcos@gmail.com',
    isActive: true
};
var creditcard = { numero: '232353245345', data: '10/34', cvv: '432' };
var createUser = function (user) {
    return { _id: "2", nome: "joao", email: "joao@uol.com", isActive: true, creditCard: creditcard };
};
console.log(createUser(userNovo));
