;
{
  'use strict'
  let formPayment = document.querySelector('.form-payment');
  if (formPayment) {
    let recurringInput = formPayment.querySelector('[name="recurring_period"]');
    let today = new Date();
    recurringInput.value = +today.getDate() > 28 ? '28' : today.getDate();

    recurringInput.addEventListener('change', recurringInputChangeHandler);

    function recurringInputChangeHandler() {
      checkEmailRequire();

    }

    function checkEmailRequire() {
      const email = formPayment.querySelector('[name="email"]');
      if (recurringInput.checked) {
        email.setAttribute('required', '');
        email.placeholder = 'Email (за 2 дня напомним о платеже) *';
      } else {
        email.removeAttribute('required');
        email.placeholder = 'Email (пришлем чек) *';
      }
    }
  }



}
