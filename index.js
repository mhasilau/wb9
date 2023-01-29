// (function() {
//     console.log('hello');
// })()
// const teacher = {
//     firstName: 'milhail',
//     secondName: 'hasilau',
//     age: 31,
//     job: 'frontend developer'
// }
// console.log(teacher);

// // const objKeys = Object.keys(teacher)
// // console.log(objKeys);

// // const objValues = Object.values(teacher)
// // console.log(objValues);

// // console.log(teacher.isMarried);
// // teacher.isMarried = true
// // teacher.job = 'teacher'
// // console.log(teacher);

// const obj2 = teacher
// console.log(obj2);
// // obj2.field = 'qqqq'
// console.log(teacher);
// console.log(obj2);

// const obj3 = {}


// for ( prop in teacher) {
//     console.log(prop);
//     obj3[prop] = teacher[prop]
// }
// console.log(obj3);
// obj3.lol = 'lol'

// console.log(teacher);
// console.log(obj3);


// const obj4 = Object.assign(teacher)
// console.log('obj4',obj4);
// const obj5 = Object.freeze(teacher)
// obj5.lol = 'lol'
// console.log('obj5', obj5);
// console.log(teacher.hasOwnProperty('age'));




// function sayHello() {
//     console.log('hello!');
// }
// sayHello()
// sayHello()



// function summ(a,b,c) {
//     console.log(a+b-c);
// }

// summ(4,56,7)
// summ(7,4,56)


// const summ2 = function(a,b,c) {
//     console.log(a+b-c);
// }

// summ2(4,56,7)
// summ2(7,4,56)


// const summ3 = (a,b,c) => {
//     console.log(a+b-c);
// }

// summ3(4,56,7)
// summ3(7,4,56)




// function args(a,b,c, ...args) {
//     const sum = a+b+c
//     console.log(args);
// }
// args(1,2,3,4,5,6,7,8)

// const arr = [5,4,3,2,1]
// console.log(...arr);



// function uravn(a,b,c){
//    const disc = (b*b-4*a*c);
//    console.log(disc);
//     if (disc > 0) {
//         const x1 = (-b+Math.sqrt(disc))/(2*a)
//         const x2 = (-b-Math.sqrt(disc))/(2*a)
//         console.log(x1);
//         console.log(x2);

//     }  else if(disc == 0){
//         const x = (-b+Math.sqrt(disc))/(2*a)
//         console.log(x);
//      } else { 
//         console.log('нет корней');
//      }

// }

// uravn(3,-4,94)



function sti(str){
    let counter = 0 
    const arr = [' ', '.', ',', '!']

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && !arr.includes(str[i])) {
            counter++
        }
    }
    console.log(counter);
}

sti ('I Have a CAr')
