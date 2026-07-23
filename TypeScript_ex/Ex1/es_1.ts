//CLASSIC FUNCTION
function doppio(n: number): number {
  return n * 2;
}

//ARROW FUNCTION: 
// "prendi n, restituisci n * 2". 
//Le graffe { } obbligano a scrivere return; senza graffe il return è automatico.
const doppio_af = (n : number) : number => n * 2;
console.log(doppio_af(5)); // 10

const triplo_af = (n : number) : number => n * 3; 
console.log(triplo_af(5)); // 15

const somma = (a: number, b : number) : number => a + b;
console.log(somma(5, 10)); // 15

const numeri: number[] = [1, 2, 3, 4, 5];
const raddoppiati = (numeri : number[]) : number[] => numeri.map(n => n*2);
console.log(raddoppiati(numeri)); // [2, 4, 6, 8, 10]

const pari = (numeri : number[]) : number[] => numeri.filter(n => n % 2 === 0);
console.log(pari(numeri)); // [2, 4]


const isMaggiorenne = (eta : number) : boolean => eta >= 18;
console.log(isMaggiorenne(20)); // true
console.log(isMaggiorenne(17)); // false

const iniziale = (nome : string) : string => nome[0].toUpperCase();
console.log(iniziale("mario")); // M
console.log(iniziale("luigi")); // L