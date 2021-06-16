{
  'use strict';
  let formPayment = document.querySelector('.form-payment');
  if (formPayment) {
    let inputFIO = formPayment.querySelector('#fio');

    inputFIO.addEventListener('blur', inputFioBlurHandler);

    function inputFioBlurHandler (evt) {
        getFIO();
    }

    function getFIO () {
      let inputFirstName = formPayment.querySelector('[name="first_name"]');
      let inputLastName = formPayment.querySelector('[name="last_name"]');
      let inputPatronymic = formPayment.querySelector('[name="patronymic"]');
      let fioArray = inputFIO.value.split(' ');
      let lastName;
      let firstName;
      let patronymic;
      if (fioArray.length === 3) {
        [lastName, firstName, patronymic] = fioArray;
      } else if (fioArray.length === 2) {
        [lastName, firstName] = fioArray;
      } else {
        firstName =  inputFIO.value;
      }
      setValue(lastName, inputLastName);
      setValue(firstName, inputFirstName);
      setValue(patronymic, inputPatronymic, true);
    }

    function setValue (value, input, optional = false) {
      if (value) {
        input.setAttribute('value', value);
      }
      else {
        input.removeAttribute('value');
      }
    }
  }

}
