const formPayment = document.querySelector('.form-payment');
export const setRecurring = () => {
  if (formPayment) {
    let recurringInput = formPayment.querySelector('[name="recurring_period"]');
    let today = new Date();
    recurringInput.value = +today.getDate() > 28 ? '28' : today.getDate();

    recurringInput.addEventListener('change', () => {
      checkEmailRequire(recurringInput);
    });
  }
}

function checkEmailRequire(recurringInput) {
  const email = formPayment.querySelector('[name="email"]');
  if (recurringInput.checked) {
    email.setAttribute('required', '');
    email.placeholder = 'Email (за 2 дня напомним о платеже) *';
  } else {
    email.removeAttribute('required');
    email.placeholder = 'Email (пришлем чек) *';
  }
}