
export const setFormAmount = () => {
  let formPayment = document.querySelector('.form-payment');
  if (formPayment) {
    const amountInput = formPayment.querySelector('input[name=amount]');
    let amountValuesElements = formPayment.querySelectorAll('.form__label-btn');
    for (let valueElement of Array.from(amountValuesElements)) {
      valueElement.addEventListener('click', (evt) => {
        amountInput.value = evt.target.innerText.split(' ')[0];
      });
    }
  }
}
