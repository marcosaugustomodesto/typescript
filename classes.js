"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Work = /** @class */ (function () {
    function Work(months, daysPerMonth) {
        this.workedHoursPerMonthDay = new Array(months);
        for (var i = 0; i < months; i++) {
            this.workedHoursPerMonthDay[i] = new Array(daysPerMonth);
        }
    }
    Work.prototype.setWorkMonthDay = function (hours, day, month) {
        this.workedHoursPerMonthDay[month][day] = hours;
    };
    return Work;
}());
var RealWork = /** @class */ (function (_super) {
    __extends(RealWork, _super);
    function RealWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RealWork.prototype.getHourMonth = function (month) {
        var workedHour = 0;
        var daysWorked = this.workedHoursPerMonthDay[month].length;
        for (var i = 0; i < daysWorked; i++) {
            workedHour += this.workedHoursPerMonthDay[month][i] || 0;
        }
        return workedHour;
    };
    return RealWork;
}(Work));
var User = /** @class */ (function () {
    function User(nome, email, isActive, dolarValueInReal, workedHours, hourValue) {
        var _this = this;
        this.nome = nome;
        this.email = email;
        this.isActive = isActive;
        this.workedHours = workedHours;
        this.getSalaryInDolar = function () {
            var realHours = _this.work.getHourMonth(0);
            return (realHours || _this.workedHours) * _this.hourValue; // Added default value for realHours
        };
        this.getSalaryInReal = function () {
            return _this.dolarValueInReal * _this.getSalaryInDolar();
        };
        this.dolarValueInReal = dolarValueInReal;
        this.workedHours = workedHours;
        this.hourValue = hourValue;
        this._id = Math.floor(Math.random() * 1000);
        this.work = new RealWork(1, 20); // Initializing work in constructor
        for (var i = 0; i < 20; i++) {
            this.work.setWorkMonthDay(7, i, 0); // Corrected the index order
        }
    }
    Object.defineProperty(User.prototype, "getCreditCardNumber", {
        get: function () {
            return this.creditCardNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCreditCardNumber", {
        set: function (creditCardNumber) {
            this.creditCardNumber = creditCardNumber;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var usuario = new User("marcos", "marcos@gmail.com", true, 5.0, 0, 50.0);
usuario.setCreditCardNumber = "32342424242";
console.log(usuario);
console.log("salario em real ".concat(usuario.getSalaryInReal()));
