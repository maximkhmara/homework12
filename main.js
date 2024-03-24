const inputField = document.querySelector('.text-field');
const hideDiv = document.querySelector('.hide-div');

inputField.addEventListener('focus', function () {
  hideDiv.classList.add('show');
});
inputField.addEventListener('blur', function () {
  hideDiv.classList.remove('show');
});