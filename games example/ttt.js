// divs
const ticTacToeDiv = document.querySelector('.ssplp')
const ticTacToeNameDiv = document.querySelector('.name')
const ticTacToeCountDiv = document.querySelector('.game-count')
const ticTacToeGameDiv = document.querySelector('.game')
const modal = document.querySelector('.modal')
const end = document.querySelector('.end')

// pics
const stone = document.getElementById('stone')
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const lizard = document.getElementById('lizard')
const spoke = document.getElementById('spoke')

// inputs
const inputName = document.getElementById('input-name')
const enterName = document.getElementById('enter-name')
const inputNumber = document.getElementById('input-number')
const enterNumber = document.getElementById('enter-number')

const gameLabel = document.getElementById('game-label')
const userСountLabel = document.getElementById('user-count')
const userCounterNum = document.getElementById('user-win')
const pcCount = document.getElementById('pc')
const totalCount = document.getElementById('total')
const winnerIs = document.getElementById('end')

const userPic = document.getElementById('user-pic')
const pcPic = document.getElementById('pc-pic')
const modalBtn = document.getElementById('close-modal')
const againBtn = document.getElementById('again')

// game 
ticTacToeDiv.style.display = 'none';
ticTacToeCountDiv.style.display = 'none';
ticTacToeGameDiv.style.display = 'none';
enterName.setAttribute('disabled', true)
enterNumber.setAttribute('disabled', true)

const hideShowNameBtn = () => {
    if (inputName.value.length < 2) {
        enterName.setAttribute('disabled', true)
    } else {
        enterName.removeAttribute('disabled')
    }
}

const hideShowCountBtn = () => {
    if (inputNumber.value < 3) {
        enterNumber.setAttribute('disabled', true)
    } else {
        enterNumber.removeAttribute('disabled')
    }
}

modalBtn.onclick = () => {
    modal.style.display = 'none'
}

modal.onclick = () => {
    modal.style.display = 'none'
}

inputName.addEventListener('input', hideShowNameBtn)

enterName.onclick = () => {
    gameLabel.innerHTML = `Привет, ${inputName.value}! Сколько раз хочешь поиграть?` 
    inputName.removeEventListener('input', hideShowNameBtn)
    inputNumber.addEventListener('input', hideShowCountBtn)
    ticTacToeNameDiv.style.display = 'none';
    ticTacToeCountDiv.style.display = 'block';
}

enterNumber.onclick = () => {
    inputNumber.removeEventListener('input', hideShowCountBtn)
    userСountLabel.innerHTML = `Победы ${inputName.value} : `
    ticTacToeCountDiv.style.display = 'none';
    ticTacToeGameDiv.style.display = 'block';
}

// let's begin
const PC_CHOOSE = ['stone', 'scissors', 'paper', 'lizard', 'spoke']
let countGames = 0
let pcCounterWin = 0
let userCounterWin = 0

const showModal = (user, pc) => {
    modal.style.display = 'block'
    const userChoose = `./${user}.png`
    const pcChoose = `${pc}.png`
    userPic.style.backgroundImage = `url(${userChoose})`
    pcPic.style.backgroundImage = `url(${pcChoose})`
}

const gameList = (winner, user, pc) => {
    switch (winner) {
        case 'pc':
            pcCounterWin++
            break;
        case 'user':
            userCounterWin++
            break;
    }
    showModal(user, pc)
    countGames++
    totalCount.innerHTML = countGames
    pcCount.innerHTML = pcCounterWin
    userCounterNum.innerText = userCounterWin

    if (countGames === +inputNumber.value) {
        modal.style.display = 'none'
        end.style.display = 'block'
        if (pcCounterWin > userCounterWin) {
            winnerIs.innerText = 'Победил компьютер'
        } else if (pcCounterWin < userCounterWin) {
            winnerIs.innerText = `Победил ${inputName.value}`
        } else {
            winnerIs.innerText = 'Ничья'
        }
    }
}

stone.onclick = () => {
    const pc = PC_CHOOSE[Math.floor(Math.random() * 5)]
    switch (pc) {
        case 'stone':
            gameList('', 'stone', pc)
            break;
        case 'scissors':
            gameList('user', 'stone', pc)
            break;
        case 'paper':
            gameList('pc', 'stone', pc)
            break;
        case 'lizard':
            gameList('user', 'stone', pc)
            break;
        case 'spoke':
            gameList('pc', 'stone', pc)
            break;
    }

}

scissors.onclick = () => {
    const pc = PC_CHOOSE[Math.floor(Math.random() * 5)]
    switch (pc) {
        case 'stone':
            gameList('pc', 'scissors', pc)
            break;
        case 'scissors':
            gameList('', 'scissors', pc)
            break;
        case 'paper':
            gameList('user', 'scissors', pc)
            break;
        case 'lizard':
            gameList('user', 'scissors', pc)
            break;
        case 'spoke':
            gameList('pc', 'scissors', pc)
            break;
    }
}

paper.onclick = () => {
    const pc = PC_CHOOSE[Math.floor(Math.random() * 5)]
    switch (pc) {
        case 'stone':
            gameList('user', 'paper', pc)
            break;
        case 'scissors':
            gameList('pc', 'paper', pc)
            break;
        case 'paper':
            gameList('', 'paper', pc)
            break;
        case 'lizard':
            gameList('pc', 'paper', pc)
            break;
        case 'spoke':
            gameList('user', 'paper', pc)
            break;
    }
}

lizard.onclick = () => {
    const pc = PC_CHOOSE[Math.floor(Math.random() * 5)]
    switch (pc) {
        case 'stone':
            gameList('pc', 'lizard', pc)
            break;
        case 'scissors':
            gameList('pc', 'lizard', pc)
            break;
        case 'paper':
            gameList('user', 'lizard', pc)
            break;
        case 'lizard':
            gameList('', 'lizard', pc)
            break;
        case 'spoke':
            gameList('user', 'lizard', pc)
            break;
    }
}

spoke.onclick = () => {
    const pc = PC_CHOOSE[Math.floor(Math.random() * 5)]
    switch (pc) {
        case 'stone':
            gameList('user', 'spoke', pc)
            break;
        case 'scissors':
            gameList('user', 'spoke', pc)
            break;
        case 'paper':
            gameList('pc', 'spoke', pc)
            break;
        case 'lizard':
            gameList('pc', 'spoke', pc)
            break;
        case 'spoke':
            gameList('', 'spoke', pc)
            break;
    }
}

againBtn.onclick = () => {
    location.reload()
}
