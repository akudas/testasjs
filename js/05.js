/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius 
nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)*/

console.clear();

let skaiciukas = 0;

while( skaiciukas !==5 ){
    skaiciukas = Math.floor(Math.random() * 10);
    console.log(skaiciukas)
}