// wat number
const watNumberDiv = document.querySelector('.wat-number')
watNumberDiv.style.display = 'none';

const modalNum = document.querySelector('.number-modal')

const moreLess = document.getElementById('more-less')
const checkBtn = document.getElementById('check')
const result = document.getElementById('end-number')
const againBtnNum = document.getElementById('again-num')
const userNumber = document.getElementById('inner-number')


againBtnNum.style.display = 'none';
const random = Math.floor(Math.random() * 10)
let counter = 1

checkBtn.onclick = () => {
    if (random > userNumber.value) {
        moreLess.innerHTML = 'Введи число больше'
        modalNum.style.display = 'block'
        counter++
        setTimeout( () => modalNum.style.display = 'none', 3000)
    } else if (random < userNumber.value) {
        moreLess.innerHTML = 'Введи число меньше'
        modalNum.style.display = 'block'
        counter++
        setTimeout( () => modalNum.style.display = 'none', 3000)
    } else {
        moreLess.innerHTML = ''
        result.innerHTML = `Число угадано с ${counter} попыток`
        modalNum.style.display = 'block'
        againBtnNum.style.display = 'block';
    }
}

againBtnNum.onclick = () => {
    location.reload()
}
