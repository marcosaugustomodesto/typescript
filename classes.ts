abstract class Work<T> {
    workedHoursPerMonthDay: T[][];
    
    constructor(months: number, daysPerMonth: number) {
        this.workedHoursPerMonthDay = new Array(months);
        for (let i = 0; i < months; i++) {
            this.workedHoursPerMonthDay[i] = new Array(daysPerMonth);
        }
    }

    setWorkMonthDay(hours: T, day: number, month: number): void {
        this.workedHoursPerMonthDay[month][day] = hours;
    }

    abstract getHourMonth(month: number): T;
}

class RealWork extends Work<number> {
    getHourMonth(month: number): number {
        let workedHour = 0;
        let daysWorked = this.workedHoursPerMonthDay[month].length;
        for(let i = 0; i < daysWorked; i++) {
            workedHour += this.workedHoursPerMonthDay[month][i] || 0;
        }
        return workedHour;
    }
}

interface Payment {
    dolarValueInReal: number;
    work: RealWork;
    hourValue: number;
    getSalaryInDolar: () => number;
    getSalaryInReal: () => number;
}

class User implements Payment {
    readonly _id: number;
    dolarValueInReal: number;
    hourValue: number;
    work: RealWork;
    private creditCardNumber: string;

    constructor(
        public nome: string,
        public email: string,
        private isActive: boolean,
        dolarValueInReal: number,
        public workedHours: number,
        hourValue: number
    ) {
        this.dolarValueInReal = dolarValueInReal;
        this.workedHours = workedHours;
        this.hourValue = hourValue;
        this._id = Math.floor(Math.random() * 1000);
        this.work = new RealWork(1, 20); // Initializing work in constructor
        for(let i = 0; i < 20; i++) {
            this.work.setWorkMonthDay(7, i, 0); // Corrected the index order
        }
    }
    

    getSalaryInDolar = () => {
        let realHours = this.work.getHourMonth(0);
        return (realHours || this.workedHours) * this.hourValue; // Added default value for realHours
    };
    
    getSalaryInReal = () => {
        return this.dolarValueInReal * this.getSalaryInDolar();
    };

    get getCreditCardNumber(): string {
        return this.creditCardNumber;
    }

    set setCreditCardNumber(creditCardNumber: string) {
        this.creditCardNumber = creditCardNumber;
    }
}

let usuario = new User("marcos", "marcos@gmail.com", true, 5.0, 0, 50.0);
usuario.setCreditCardNumber = "32342424242";
console.log(usuario);
console.log(`salario em real ${usuario.getSalaryInReal()}`)
export {};
