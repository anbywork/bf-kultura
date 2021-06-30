
export const setFIOInput = () => {
  const fioInputs = document.querySelectorAll('.fio');
  for (let input of Array.from(fioInputs)) {
    input.addEventListener('blur', () => {
      getFIO(input);
    });
  }
}

function getFIO (inputFIO) {
  const formPayment = inputFIO.closest('form');
  const inputFirstName = formPayment.querySelector('[name="first_name"]');
  const inputLastName = formPayment.querySelector('[name="last_name"]');
  const inputPatronymic = formPayment.querySelector('[name="patronymic"]');
  const fioArray = inputFIO.value.split(' ');
  let lastName = ``;
  let firstName = ``;
  let patronymic = ``;
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