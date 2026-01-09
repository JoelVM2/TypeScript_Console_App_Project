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
        const orderedNumbers = [...numbers].sort((a, b) => b - a);
        return ("Segundo número más grande " +
            orderedNumbers[1] +
            " en la posición " +
            numbers.findIndex((num) => num === orderedNumbers[1]));
    }
    countriesPopulation(countries, population) {
        const orderedPopulation = [...population].sort((a, b) => b - a);
        let moreIndex = population.findIndex((num) => num === orderedPopulation[0]);
        let lessIndex = population.findIndex((num) => num === orderedPopulation[4]);
        return ("El país con mas población es " +
            countries[moreIndex] +
            " con una población de " +
            orderedPopulation[0] +
            " y el país con menos población es " +
            countries[lessIndex] +
            " con una población de " +
            orderedPopulation[4]);
    }
    primeNumbers(numbers) {
        let sum = "";
        for (const num of numbers) {
            if (this.isPrime(num)) {
                sum += num + " ";
            }
        }
        return sum;
    }
    isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    salary(hours, rate) {
        let workerSalary = "";
        for (let i = 0; i <= hours.length - 1; i++) {
            workerSalary +=
                "El trabajador " + (i + 1) + " obtiene " + hours[i] * rate[i] + "€ \n";
        }
        return workerSalary;
    }
    age(ages) {
        const orderedAges = [...ages].sort((a, b) => a - b);
        return orderedAges;
    }
    heightTree(trees) {
        let treeSum = trees.reduce((sum, num) => sum + num, 0);
        let treeAverage = treeSum / trees.length;
        let aboveAverage = 0;
        for (const tree of trees) {
            if (tree > treeAverage) {
                aboveAverage++;
            }
        }
        return aboveAverage;
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map