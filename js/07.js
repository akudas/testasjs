/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės 
A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) */


console.clear();

const masyvas = [];
const raides = [ "A", "B", "C", "D"];


for( i=0 ; i<100; i++){
    const belekas = Math.floor(Math.random() * raides.length);
    const paimta = raides[belekas];
    masyvas.push(paimta);
}

//console.log(masyvas);

let a = 0;
let b = 0;
let c = 0;
let d = 0;

for( i=0 ; i < masyvas.length; i++ ){
    switch (masyvas[i]) {
        case 'A':
                a++        
                break;
        case 'B':
                b++        
                break;
        case 'C':
                c++        
                break;

        default:
                d++;
}
}

console.log("A kiekis:", a);
console.log("B kiekis:", b);
console.log("C kiekis:", c);
console.log("D kiekis:", d);
