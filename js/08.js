/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba
masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji
skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti
masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet
suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)*/

console.clear();


function lygineSuma( a , b){
    if( Array.isArray(a)) {
        return ( a.lenght + b.lenght );}
        else {
            return ( a + b );
        }
        
    }






console.log(lygineSuma(2, 6));
console.log(lygineSuma(1, 4))
console.log(lygineSuma([3, 7, 1], [5,7]));
console.log(lygineSuma([9, 2, 5], [3, 4, 9]));