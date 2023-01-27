const num = -5
console.log(typeof num, num);

const numStr1 = String(num)
console.log(typeof numStr1, numStr1);

const numBool1 = Boolean(num)
console.log(typeof numBool1, numBool1);

const numStr2 = 5 + ''
console.log(typeof numStr2, numStr2);

const numBool2 = !!num
console.log(typeof numBool2, numBool2);

const str = '123'
console.log(typeof str, str);

const strNum1 = Number(str)
console.log(typeof strNum1, strNum1);

const strNum2 = parseInt(str)
console.log(typeof strNum2, strNum2);

const strNum3 = +str
console.log(typeof strNum3, strNum3);
