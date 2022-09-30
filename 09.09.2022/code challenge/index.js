// const myCar = {
//     make : 'ford',
//     model : 'Mustang',
//     year : 1965,
//     color: 'Black'
// }

// myCar["age"] = function (time) {
//     return time- myCar.year
// }

// console.log(myCar);
    
// console.log(myCar.age(2022));  //Output: 57
   


// !JS-CC-004 : Roman Numerals
//! Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//! Example:

//! 1000=M 900=CM 90=XC

//! 2008 is written as MMVIII:

//! 2000=MM 8=VIII***/

// const intToRoman = (num) => {
//     let result = "";
//     while(num){
//        if(num>=1000){
//           result += "M";
//           num -= 1000;
//        }else if(num>=500){
//           if(num>=900){
//              result += "CM";
//              num -= 900;
//           }else{
//              result += "D";
//              num -= 500;
//           }
//           }else if(num>=100){
//              if(num>=400){
//                 result += "CD";
//                 num -= 400;
//              }else{
//                 result += "C";
//                 num -= 100;
//              }
//           }else if(num>=50){
//              if(num>=90){
//                 result += "XC";
//                 num -= 90;
//              }else{
//                 result += "L";
//                 num -= 50;
//              }
//           }else if(num>=10){
//              if(num>=40){
//                 result += "XL";
//                 num -= 40;
//              }else{
//                 result += "X";
//                 num -= 10;
//              }
//           }else if(num>=5){
//              if(num>=9){
//                 result += "IX";
//                 num -= 9;
//             }else{
//                 result += "V";
//                 num -= 5;
//              }
//           }else{
//              if(num>=4){
//                 result += "IV";
//                 num -= 4;
//           }else{
//              result += "I";
//              num -= 1;
//           }
//        }
//     }
//     return result;
//  };
//  console.log(intToRoman(178));
//  console.log(intToRoman(89));
//  console.log(intToRoman(55));
// console.log(intToRoman(1555));
 

// const convertToRoman = (num) => {
//     let roman = '';
//     let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     for (let i = 0; i < decimal.length; i++) {
//         while (decimal[i] <= num) {
//             roman += romanNum[i];
//             num -= decimal[i];
//         }
//     }
//     return roman;
// };

// console.log(convertToRoman(2748));


// const roman = (num1) => {
//     let romNum = "";
//     let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// }


