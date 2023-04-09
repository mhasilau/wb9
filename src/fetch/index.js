const databaseURL = 'https://wb9-2023-default-rtdb.firebaseio.com';

const userName = prompt('enter ur name')
const password = prompt('enter password')


function createUser() {
    return fetch(`${databaseURL}/users.json`,{
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            password
        })
    })
    .then(res => res.json())
    .then(json => json)
}



createUser()


// function getProducts(id) {
//     return fetch(`https://dummyjson.com/products/${id}`,{
//         method: 'GET'
//     })
//     .then(res => res.json())
//     .then(json => console.log(json))
// }


// const newObj = {
//     brand: "IT Academy",
//     category: "WB9",
//     description: "",
//     discountPercentage: 10.58,
//     images: ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg'],
//     price: 499,
//     rating: 4.09,
//     stock: 32,
//     thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//     title: "Huawei P30"
// }

// function postProducts() {
//     return fetch('https://dummyjson.com/products/add',{
//         method: 'POST',
//         body: JSON.stringify(newObj)
//     })
//     .then(res => res.json())
//     .then(json => json)
// }

// async function b() {
//     console.log('start');
//     const obj = await postProducts()
//     console.log(obj);
//     // await getProducts(obj.id)
//     console.log('finish');
// }

// b()