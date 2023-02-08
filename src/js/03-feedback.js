import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const inputElement = document.querySelector('input');
const textareaElement = document.querySelector('textarea');

formElement.addEventListener('submit', submitForm);
formElement.addEventListener('input', throttle(addlocalStorage, 500));

const localObject = {
  email: '',
  message: '',
};

function submitForm(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function addlocalStorage(evt) {
  localObject[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(localObject));
}

const dataObject = localStorage.getItem('feedback-form-state');
function insertWithLS(object) {
  if (object && inputElement.name === 'email') {
    inputElement.value = JSON.parse(object).email;
  }

  if (object && textareaElement.name === 'message') {
    textareaElement.value = JSON.parse(object).message;
  }
}
insertWithLS(dataObject);
