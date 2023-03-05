import {getUser} from '../../api/api-handlers'
// import {api} from '../../api/fake-api'

// export const ava = async () => {
//     await getUser(`${api}/users`).then(a => console.log(a))
// }

export const user = async () => {
    const userFirstName = document.getElementById('user-firstname')
    const userSecondName = document.getElementById('user-secondname')
    const avatar = document.getElementById('avatar')
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    avatar.style.borderRadius = '50%'



    await getUser().then(a => {
        userFirstName.innerHTML = a.firstname;
        userSecondName.innerHTML = a.secondname;
        avatar.src = a.ava
    })
}