/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų 
skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT
 sort() bei Math.max() funkcijų. (7 taškai)*/

 console.clear();

 const masyvas = [];

 for( i=0; i < Math.floor(Math.random() * (31-19) + 19); i++){
    const dalis = Math.floor(Math.random() * (31-9) + 9);
    masyvas.push(dalis);
 }

 console.log(masyvas);


let didziausias = masyvas[0];


 for( i=1; i < masyvas.length; i++){
    if( masyvas[i] > didziausias){
        didziausias = masyvas[i];
    }
 }

 console.log("Didziausias skaicius masyve:", didziausias);

 // Kodel konsole spausdina ketvertus??