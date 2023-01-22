// const age = 18

// if ( age > 18 ) {
//     console.log('true');
// } else if ( age < 18 ) {
//     console.log('false');
// } else {
//     console.log('= 18');
// }


// >=
// <=
// ==
// ===

// !=
// !==

// console.log( 1 === '1' );

// const n = 'vasya'
// if (n != 'vasya') {
//     console.log('yes');
// } 

// %

// console.log(254253435483 % 3543435432543554);


// const sex = 'woman'
// const age = 30
// const hairColor = 'blue'

// if ((sex === 'man' || age >= 30) && hairColor !== 'blue') {
//     console.log('u r welcome');
// } else {
//     console.log('sorry');
// }


// const userName = 'mike'

// switch (userName) {
//     case 'mike':
//     case 'nick':
//         console.log('hello, guys');
//         break;
//     case 'mary':
//         console.log('hello, mary');
//         break;

//     default:
//         console.log('who are you?');
//         break;
// }



// let i = 5

// while (i < 5) {
//     console.log('i = ', i);
//     i++
// }

// let j = 5

// do {
//     console.log('j = ', j);
//     j++
// } while (j < 5);


// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// const arr = [31,34,3514,64,31,35,43,51,56]
// // console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }

const arr = [2,5,8,18,31,50]

let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    console.log(sum);
}


