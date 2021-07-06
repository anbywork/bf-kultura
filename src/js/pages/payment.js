const payment = document.querySelector('.payment');
export const setPaymentPage = () => {
  if (payment) {
    const toggleInputList = payment.querySelectorAll('.payment__toggle input');
    const paymentContents = payment.querySelectorAll('.payment__list-item');
    let activeContent = payment.querySelector('.payment__list-item:not(.payment__list-item--hidden)');
    for (let input of Array.from(toggleInputList)) {
      input.addEventListener('change', () => {
        if (input.checked) {
          // скрываем активный блок
          activeContent.classList.add('payment__list-item--hidden');

          // показываем активированный блок
          const id = input.getAttribute('data-id');
          activeContent = payment.querySelector('#' + id);
          activeContent.classList.remove('payment__list-item--hidden');
        }
      });
    }
  }
}
