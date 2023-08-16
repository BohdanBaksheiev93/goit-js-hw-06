    const counterValue = document.getElementById('value');
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');

    let currentValue = 0;

    function updateCounterValue() {
      counterValue.textContent = currentValue;
    }

    decrementButton.addEventListener('click', () => {
      currentValue -= 1;
      updateCounterValue();
    });

    incrementButton.addEventListener('click', () => {
      currentValue += 1;
      updateCounterValue();
    });

    updateCounterValue();