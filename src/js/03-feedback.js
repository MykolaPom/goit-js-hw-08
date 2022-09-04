import throttle from 'lodash.throttle';

//збереження значення полів у локальне сховище
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};


formEl.addEventListener('input', throttle(saveForm, 500));
formEl.addEventListener('submit', submitForm);

function saveForm(e) {
  formData.email = inputEl.value;
  
  formData.message = textareaEl.value;
  
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function submitForm(e) {
  e.preventDefault();
 
  formData.email = inputEl.value;
  formData.message = textareaEl.value;
  
  console.log(formData);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  formEl.reset();
}

function populateTextarea() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    textareaEl.value = parsedData.message;
    inputEl.value = parsedData.email;
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(parsedData));
  };
};

populateTextarea();

