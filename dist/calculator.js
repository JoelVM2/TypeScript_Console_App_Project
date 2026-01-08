"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor() { }
    sumSqr(numbers) {
        let sum = 0;
        for (const num of numbers) {
            sum += num ** 2;
        }
        return sum;
    }
    fibonacciNumber(num) {
        if (num < 2) {
            return num;
        }
        else {
            return this.fibonacciNumber(num - 1) + this.fibonacciNumber(num - 2);
        }
    }
    fibonacci() {
        let string = "";
        for (let i = 1; i < 6; i++) {
            string += this.fibonacciNumber(i);
        }
        return string;
    }
    secondLargestNumber(numbers) {
        const numerosOrdenados = [...numbers].sort((a, b) => b - a);
        return "Segundo numero más grande " + numerosOrdenados[1] + " en la posición " + numbers.findIndex(num => num === numerosOrdenados[1]);
        ;
    }
    minus(number, numberN) {
        let sum = 0;
        for (const num of numberN) {
            sum += num;
        }
        const resta = number - sum;
        return resta;
    }
    minus2(number, numberN) {
        const sum = numberN.reduce((acc, num) => acc + num, 0);
        return Math.max(0, number - sum);
    }
    div(dividend, divider) {
        if (divider === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return dividend / divider;
    }
    multiply(numbers) {
        let mul = 1;
        for (const num of numbers) {
            mul *= num;
        }
        return mul;
    }
    multiply2(numbers) {
        return numbers.reduce((acc, num) => acc * num, 1);
    }
    exponentiation(number, exponent) {
        const expon = number ** exponent;
        return expon;
    }
    sqrt(number) {
        if (number < 0)
            throw new Error("Raíz cuadrada no definida para números negativos.");
        return Math.sqrt(number);
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map