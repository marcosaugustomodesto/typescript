"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { id: '1234', nome: 'marcos', isActive: true };
var employee = {
    id: '12',
    payPerHora: 35.0,
    workedHours: 160,
    dolarValue: 5.0,
    payments: function () {
        if (this !== undefined) {
            return this.payPerHora * this.workedHours;
        }
        return 0;
    },
    user: user,
    paymentsConverted: function () {
        if (this !== undefined) {
            return this.payments() * this.dolarValue;
        }
        return 0;
    }
};
console.log("Pagamento de salario para ".concat(user.nome, " \u00E9 de ").concat(employee.payments(), " USD"));
console.log("Sal\u00E1rio convertido para reais \u00E9 de ".concat(employee.paymentsConverted(), " BRL"));
