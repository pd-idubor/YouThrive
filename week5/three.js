//Function changes the color of an element with id(sample) based on response
//

function colorChange(res) {
  const sample = document.querySelector('#sample');
  if (res === 'failed'){
    sample.style.backgroundColor = 'red';
  }
  else if (res === 'successful') {
    sample.style.backgroundColor = 'green';
  }
}
colorChange('failed');
