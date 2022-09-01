console.log("SORULAR");

console.log("SORU - 1");
//* Write a function that takes an array of characters and reverses the letters in place.
//Examples:
//reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
//reverse("Happy") ➞ yppaH */

// let x = "merhaba ali";
// function ters() {
//     let x = prompt("Bir yazı yazınız: ");
//     let sonuc = "";
//     for (let i= (x.length)-1; i >=0; i--) {
//         sonuc += x[i];
//         // console.log(sonuc);
//     }
//     return sonuc;
// }

// console.log(ters());

function ters() {
    let x = prompt("Bir yazı yazınız: ");
    let uzunluk = x.length;
    let sonuc = "";
    for (let i= uzunluk -1 ; i >= 0; i--) {
        sonuc += x[i];
    }
    return sonuc;
}

console.log(ters());

// NOT: Javascript te eksi sayıyla indeksleme yoktur.Çook Önemli