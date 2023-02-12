// const btn1 = document.getElementById('btn1')


// const btn2_1 = document.querySelector('.btn2')
// const btn2_2 = document.querySelector('#btn2')

// // console.log(btn2_1);
// // console.log(btn2_2);


// const li = document.querySelectorAll('li')
// console.log(li);

// for (let elem of li) {
//     console.log(elem.matches('li[value="6"]'));
// }

// const chapter = document.querySelector('.chapter'); // LI

// console.log(chapter.closest('.book')); // UL
// console.log(chapter.closest('.contents')); // DIV

// console.log(chapter.closest('h1')); // null (потому что h1 - не предок)


const inpWrite = document.querySelector('#writting')
const p = document.querySelector('#p')
const remove = document.querySelector('#btn-rem')
p.innerHTML = 'Hello'

const inputFunc = () => {
    console.log(inpWrite.value);
    p.innerHTML = inpWrite.value
}

inpWrite.addEventListener('input', inputFunc)

remove.onclick = () => {
    alert('remove listener from input')
    inpWrite.removeEventListener('input', inputFunc)
    inpWrite.value = ''
}

