interface Employee {
    readonly id: string;
    payPerHora: number;
    workedHours: number;
    dolarValue: number;
    payments: () => number;
    user: User;
    paymentsConverted: () => number;
}

interface User {
    readonly id: string;
    nome: string;
    isActive: boolean;
}

let user: User = { id: '1234', nome: 'marcos', isActive: true };
let employee: Employee = {
    id: '12',
    payPerHora: 35.0,
    workedHours: 160,
    dolarValue: 5.0,
    payments: function() {
        if (this !== undefined) {
            return this.payPerHora * this.workedHours;
        } 
        return 0;
    },
    user: user,
    paymentsConverted: function() {
        if (this !== undefined) {
            return this.payments() * this.dolarValue;
        } 
        return 0;
    }
};

console.log(`Pagamento de salario para ${user.nome} é de ${employee.payments()} USD`);
console.log(`Salário convertido para reais é de ${employee.paymentsConverted()} BRL`);
export {};
