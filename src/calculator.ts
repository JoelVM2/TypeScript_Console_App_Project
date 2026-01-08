export class Calculator 
{
    constructor() {}
  
    /**
     * Calcula la suma de los números en un arreglo.
     * @param numbers - Arreglo de números.
     * @returns La suma de los números.
     */

    public sumSqr(numbers: number[]): number 
    {
      let sum = 0;
      for (const num of numbers) {
        sum += num**2;
      }
      return sum;
    }

    public fibonacciNumber(num: number): number
    {
        if(num < 2) {
        return num;
    }
    else {
        return this.fibonacciNumber(num-1) + this.fibonacciNumber(num - 2);
    }
    }

    public fibonacci(): string {
        let string = "";
        for(let i = 1; i < 6; i++) {
        string += this.fibonacciNumber(i);
    }

        return string;
    }

    public secondLargestNumber(numbers: number[]): string {
        const orderedNumbers = [...numbers].sort((a, b) => b - a);
        return "Segundo número más grande " + orderedNumbers[1] + " en la posición " + numbers.findIndex(num => num === orderedNumbers[1]);
    }

    public countriesPopulation(countries: String[],population: number[]): string {

        const orderedPopulation = [...population].sort((a, b) => b - a);
        let  moreIndex = population.findIndex(num => num === orderedPopulation[0])
        let lessIndex = population.findIndex(num => num === orderedPopulation[4])

            return "El país con mas población es " + countries[moreIndex] + " con una población de " + orderedPopulation[0] + " y el país con menos población es " + countries[lessIndex] + " con una población de " + orderedPopulation[4];
    }

     public primeNumbers(numbers: number[]): string 
    {
      let sum = "";
      for (const num of numbers) {
        if(this.isPrime(num)){
            sum += num + " "
        }
      }
      return sum;
    }

    public isPrime(num: number):boolean{
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

}