 const prompt = require("prompt-sync")();

//// 1 JavaScript Practice Task 1 - 4 2023

//// 1) You can use VS Code terminal to run your script 
//// Use String :  asuntokionapajaa 

//// 1 a) Find from String : “paja” an put it to another string 
// const text = 'asuntokionapajaa';
// const textPosition = text.search('paja')
// console.log(textPosition);

// const partOfText = text.slice(11,15)
// console.log(partOfText);

//// 1 b) Read  every 3rd char from String  to new String, if char is  “a” change it to “*” .   
////    PrintOut new string.
 
// let string = 'asuntokionapajaa';
// let newStr="";
// let i = 0;
// let j = 0;
// for (i = 0; i < string.length;i++) 
// { j = i + 1;
//     if (j % 3 === 0)
//      {if (string[i] === "a") { 
//         (i % 3, " : ", i, " : ", "*");
//         newStr += "*";
//     } else {
//         (i % 3, " : ", i, " : ", string[i]);
//          newStr += string[i]; 
//         }
//     }
// } console.log(newStr)

//// 2) Ask age  ( in console type age, Use prompt, here is link how to install prompt to VS Code  
//// ask age  so long that it’s  between 18 -22, then PrintOut age and  If age is 18 : PrintOut also “So young ” , if age 20 PrintOut: “ Hmmmmm….”  and if age is 22 : PrintOut “Fine 😊” 

// let checkAge = 0;
// do {
//     checkAge = prompt('How old are you? ');
// }while (checkAge > 22 || checkAge < 18);
// switch (checkAge) {
//     case '18':
//         console.log('So young');
//         break;
//     case '20':
//         console.log('Hmmmmm....');
//         break;
//     case '22':
//         console.log('Fine 😄');
//         break;
//         default:
//             console.log('You are old enough...');
// }

//// 3) Greate Array “Dog”,”Horse”,”Cow” 

// const animals = ['Dog', 'Horse', 'Cow'];
// console.log(animals);

//// a) PrintOut Array, use forEach and forEach with ARROW-function 

// animals.forEach(animals => console.log(animals));

//// b) Copy Array to new Array  ( use Map ) 
//// Add to new Array new columns “Cat”, “Sheep” 

// const animals = ['Dog', 'Horse', 'Cow'];

// const modifyAnimals = animals.map((m) => m)
// modifyAnimals.push('Cat', 'Sheep');
// console.log(modifyAnimals);

//// c) Find  “Cow” from new Array 

// let foundAnimal = modifyAnimals.find(function (animal) {
//     return animal == 'Cow';
// });

// console.log(foundAnimal);

//// 4) Create Class and method :  
//// Class Flower, Type(like Rose), Color, Amount( how many), inStore ( false/true) 
//// Methos:  you can change Amount, change color, change is inStore false/True  
//// Change color, amount, inStore, PrintOut yours flower, colour and if instore is true, then yes / no 

// class Flower {
//     constructor(type, color, amount, inStore){
                
//     this.type = type;
//     this.color = color;
//     this.amount = amount;
//     this.inStore = inStore;
//     }

//     updateColor(newColor) {
//         this.color = newColor;
//     }
//     updateAmount(newAmount) {
//         this.amount = newAmount;
//     }

    //// Updating the amount
    //// theFairy.amount = 100;

//     updateInStore(newInStore) {
//         if (this.inStore) {
//             this.inStore = false;
//         } else {
//             this.inStore = true;
//         }
//     }
   
// }

// let rose = new Flower('The Fairy', 'Pink', 10, true);
// console.log(rose);
// rose.updateInStore(false);
// rose.updateAmount(0);
// console.log(rose.type, rose.color, 'inStore' , rose.inStore === true ? 'yes' : 'no', 'number of amount:' , rose.amount);

