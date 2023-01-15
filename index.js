// const str = 'some RAnDom StriNg'
// const str2 = 'string 2'

// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());

// console.log(str.repeat(3));

// console.log(str.toLowerCase().includes('dom'));

// console.log(str.concat(str2, 'fdfd', 5464));

// console.log(str.startsWith('som'));
// console.log(str.endsWith('!'));

// console.log(str.replaceAll(' ', ' * '));

// console.log(str.charAt(8));

// console.log(str.indexOf('m'));
// console.log(str.lastIndexOf('m'));

// console.log(str.slice(3, 6));
// console.log(str.substr(5, 5));

// const inner = prompt()
// console.log(inner.toUpperCase());

// const arr = [4, 'fdsfd', null, [0,1,4,5,96]]
// console.log(arr[3][4]);

// const arr1 = [1,2,3,5,4,8]
// const arr2 = [7,8,9]

// console.log(arr1.concat(arr2, 2424, 'sss'));

// const str2 = 'qwerty qazxsw qwsxza'
// const arrStr2 = str2.split(' ')
// console.log(arrStr2);

// const arr3 = [1,4,5,2,3,5]
// const srtArr3 = arr3.join('* -')
// console.log(srtArr3);


const arr4 = [0,1,2,3,4,5,6,7,8,9]
// console.log(arr4.reverse());
// console.log(arr4.includes(44));

// arr4.push(10,11,12)
// console.log(arr4);
// const pop = arr4.pop()
// console.log(arr4);
// console.log(pop);

// arr4.unshift(3,2,1)
// console.log(arr4);
// const shift = arr4.shift()
// console.log(arr4);
// console.log(shift);

// const arr5 = [31,684,361,648,315,100, 74,687]
// console.log(arr5.sort((a,b) => a - b));

// console.log(arr4.slice(4, 7));
// console.log(arr4);
// console.log('--------');
// console.log(arr4.splice(4, 3));
// console.log(arr4);

// console.log(arr4.splice(4,3, 40,50,60));
// console.log(arr4);

const myName = prompt()
console.log(myName);
const arrName = myName.split(' ')
console.log(arrName);
arrName[0] = arrName[0].toLowerCase()
arrName[1] = arrName[1].toUpperCase()
console.log(arrName);
const newMyname = arrName.join(' ')
console.log(newMyname);