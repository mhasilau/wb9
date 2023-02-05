// call, bind, apply
// const obj = {
//     firstName: 'mikhail',
//     secondName: 'hasilau',
//     info: function(phone, email) {
//         console.log(`${this.firstName} ${this.secondName}`);
//         if (phone && email) {
//             console.log('Phone: ', phone);
//             console.log('Email: ', email);
//         }
//     }
// }

// obj.info()

// const o1 = {
//     firstName: 'mike',
//     secondName: 'wasovski',
// }

// const bindFunction = obj.info.bind(o1)
// bindFunction('111-11-11', 'mike@ya.ru')

// const o2 = {
//     firstName: 'peter',
//     secondName: 'pen',
// }

// obj.info.call(o2, '222-22-22', 'peter@ya.ru')

// const o3 = {
//     firstName: 'doctor',
//     secondName: 'who',
// }
// obj.info.apply(o3, ['333-33-33', 'doc@ya.ru'])


//=================
// promises

// const promise = new Promise( (resolve, reject) => {
//     // setTimeout( () => resolve('done!'), 2000)
//     setTimeout( () => reject('error!'), 2000)
// })

// console.log(promise);
// promise.then(
//     result => console.log(result) //,
//     // error => console.log(error)
// )
// .catch( error => console.log(error))
// .finally( () => console.log('finally'))



// call, bind, apply - arrow function has no context and arguments
// const obj = {
//     firstName: 'mikhail',
//     secondName: 'hasilau',
//     info: () => {
//         console.log(`${this.firstName} ${this.secondName}`);
//         console.log(arguments);
//         // if (phone && email) {
//         //     console.log('Phone: ', phone);
//         //     console.log('Email: ', email);
//         // }
//     }
// }
// const o2 = {
//     firstName: 'peter',
//     secondName: 'pen',
// }

// obj.info.call(o2, '222-22-22', 'peter@ya.ru')


//===================

// const url = 'https://jsonplaceholder.typicode.com/users/1'

// const f = async () => {
//     await fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// const a = async () => {
//     console.log('start');
//     await f()
//     console.log('end');
// }

// // a()

// const err = () => {
//     throw 'some error =('
// }

// const tryCatch = async () => {
//     try {
//         await a()
//         // err()
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('finally');
//     }
// }

// tryCatch()


// // console.log('start');
// // setTimeout( () => console.log('setTimeout'), 0)
// // console.log('end');




// TODO for trainer
// function is not work

const usersUrl = 'https://jsonplaceholder.typicode.com/users'
let usersArray
async function getUsers() {
    arr = await fetch(usersUrl)
        .then(response => response.json())
        .then(users => {
            let arr;
            arr = users
            return arr
        })   
}
// getUsers()

const a = async () => {
    await getUsers().then(res => usersArray = res)
}
a()

// const usersArray = getUsers()
console.log(usersArray);