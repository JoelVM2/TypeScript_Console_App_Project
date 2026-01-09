"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const calculator_1 = require("./calculator");
function printMenu() {
    console.log("\n=== Calculadora ===");
    console.log("1. Suma de cuadrados de 1..N.");
    console.log("2. Producto de los primeros N términos de Fibonacci.");
    console.log("3. Segundo número más grande: valor y posición.");
    console.log("4. Ciudades y poblaciones: ciudad mayor y menor.");
    console.log("5. Primos presentes en un vector.");
    console.log("6. Sueldo total por empleado (horas y tarifa).");
    console.log("7. Ordenar edades ascendente.");
    console.log("8. Alturas de árboles: cuántos superan la media.");
    console.log("0. Salir");
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askUser(question) {
    return new Promise(resolve => {
        rl.question(question, answer => resolve(answer));
    });
}
function readNumbers() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = yield askUser("Introduce números separados por espacios: ");
        return input.split(" ").map(Number);
    });
}
function readWords(question) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = yield askUser(question);
        return input.split(",").map(String);
    });
}
function calculate() {
    return __awaiter(this, void 0, void 0, function* () {
        const calc = new calculator_1.Calculator();
        let option = -1;
        while (option !== 0) {
            printMenu();
            option = Number(yield askUser("Elige una operación de la calculadora: "));
            switch (option) {
                case 1: {
                    const nums = yield readNumbers();
                    console.log("Resultado:", calc.sumSqr(nums));
                    break;
                }
                case 2: {
                    console.log("Resultado:", calc.fibonacci());
                    break;
                }
                case 3: {
                    const nums = yield readNumbers();
                    console.log("Resultado:", calc.secondLargestNumber(nums));
                    break;
                }
                case 4: {
                    const countries = yield readWords("Introduce 5 Países separados por comas: ");
                    console.log("Introduce las poblaciones correspondientes.");
                    const population = yield readNumbers();
                    console.log("Resultado:", calc.countriesPopulation(countries, population));
                    break;
                }
                case 5: {
                    const nums = yield readNumbers();
                    console.log("Resultado:", calc.primeNumbers(nums));
                    break;
                }
                case 6: {
                    console.log("Horas");
                    const hours = yield readNumbers();
                    console.log("Tarifas");
                    const rate = yield readNumbers();
                    console.log("Resultado:", calc.salary(hours, rate));
                    break;
                }
                case 7: {
                    console.log("Edades");
                    const age = yield readNumbers();
                    console.log("Resultado:", calc.age(age));
                    break;
                }
                case 8: {
                    console.log("Árboles");
                    const treeHigh = yield readNumbers();
                    console.log("Resultado:", calc.highTree(treeHigh));
                    break;
                }
                case 0:
                    console.log("Saliendo de la calculadora...");
                    rl.close();
                    break;
                default:
                    console.log("Opción inválida. Inténtalo de nuevo.");
            }
        }
    });
}
calculate();
//# sourceMappingURL=main.js.map