//https://github.com/vanessamaldonado/Proyectos_DWEC/tree/master/PROYECTOS%20TYPESCRIPT/Calculadora/src
import * as readline from "readline";
import { Calculator } from "./calculator";

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


function askUser(question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, answer => resolve(answer));
  });
}

async function readNumbers(): Promise<number[]> {
  const input = await askUser("Introduce números separados por espacios: ");
  return input.split(" ").map(Number);
}

async function readWords(question : string): Promise<String[]> {
  const input = await askUser(question);
  return input.split(",").map(String);
}

async function calculate() {
  const calc = new Calculator();

  let option = -1;

  while (option !== 0) {
    // Muestra el menú por consola
    printMenu();

    option = Number(await askUser("Elige una operación de la calculadora: "));

    switch (option) {
      case 1: {
        const nums = await readNumbers();
        console.log("Resultado:", calc.sumSqr(nums));
        break;
      }
      case 2: {
        console.log("Resultado:", calc.fibonacci());
        break;
      }
      case 3: {
        const nums = await readNumbers();
        console.log("Resultado:", calc.secondLargestNumber(nums));
        break;
      }
      case 4: {
        const countries = await readWords("Introduce 5 Países separados por comas: ");
        console.log("Introduce las poblaciones correspondientes.");
        const population = await readNumbers();
        console.log("Resultado:", calc.countriesPopulation(countries, population));
        break;
      }
      case 5: {
        const nums = await readNumbers();
        console.log("Resultado:", calc.primeNumbers(nums));
        break;
      }
      case 6: {
        const n = Number(await askUser("Número: "));
        //console.log("Resultado:", calc.sqrt(n));
        break;
      }
      case 7: {
        const n = Number(await askUser("Número: "));
        //console.log("Resultado:", calc.sqrt(n));
        break;
      }
      case 8: {
        const n = Number(await askUser("Número: "));
       // console.log("Resultado:", calc.sqrt(n));
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
}
calculate();