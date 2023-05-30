{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.53;
    const rateUSD = 4.2;
    const rateUAH = 0.11;

    switch ((amount, currency)) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "UAH":
        return amount / rateUAH;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js__result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js__writeAmount");
    const currencyElement = document.querySelector(".js__select");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
