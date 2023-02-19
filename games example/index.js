// buttons
// ticTacToe
const ticTacToeBtn = document.getElementById('tic-tac-toe')
// wat number
const watNumberBtn = document.getElementById('wat-number')

// main buttons
ticTacToeBtn.onclick = () => {
    ticTacToeDiv.style.display = 'block';
    watNumberDiv.style.display = 'none';
}

watNumberBtn.onclick = () => {
    ticTacToeDiv.style.display = 'none';
    watNumberDiv.style.display = 'block';
}
