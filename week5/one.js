// numFunction - Takes a number as input and returns odd or even based on number type

function numFunction(num) {
  if (num === 0) return ('Enter a non zero number');
  if (num % 2 === 0) {
    return ('Even');
  } else{
    return ('Odd');
  }
}

console.log('0: ', numFunction(0));
console.log('3: ', numFunction(3));
console.log('20: ', numFunction(20));
console.log('81: ', numFunction(81));
console.log('10000: ', numFunction(10000));
