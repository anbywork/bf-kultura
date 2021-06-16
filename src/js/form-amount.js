;
{
  'use strict'
  let formPayment = document.querySelector('.form-payment');
  if (formPayment) {
    let amount = formPayment.querySelector('input[name=amount]');
    amount.value = formPayment.querySelector('input[name=amount-value]:checked').value;
    let amountAnother = formPayment.querySelector('input[name=amountAnother]');
    let amountValues = formPayment.querySelectorAll('input[name="amount-value"]');
    console.log('amount.value = ' + amount.value);

    amountAnother.addEventListener('input', amountAnotherInputHandler);

    for (let i = 0; i < amountValues.length; i++) {
      amountValues[i].addEventListener('change', amountValuesChangeHandler);
    }

    function amountAnotherInputHandler(evt) {
      const value = amountAnother.value;
      if (value) {
        amount.value = value;
        for (let i = 0; i < amountValues.length; i++) {
          amountValues[i].checked = false;
        }
        console.log('amount.value = ' + amount.value);
      }
    }

    function amountValuesChangeHandler(evt) {
      if (evt.target.checked) {
        amountAnother.value = '';
        amount.value = evt.target.value;
        console.log('amount.value = ' + amount.value);
      }
    }
  }
}
