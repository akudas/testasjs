/* Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius 
nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)*/

console.clear();

for( i=0 ; i<5; i++){
const skaiciukas = Math.floor(Math.random() * 10);
console.log(skaiciukas);
}

