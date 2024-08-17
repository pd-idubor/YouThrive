//Function adds an li element to an unordered list on button click

function listFunction() {
  const list = document.querySelector('#unordered');
  const button = document.querySelector('#new');
  button.addEventListener('click', () => {
    list.innerHTML += `<li>Button click ${list.childElementCount + 1}</li>`;
  })
}
listFunction();
