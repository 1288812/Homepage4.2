let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js__writeAmount");
let currencyElement = document.querySelector(".js__select");
let resultElement = document.querySelector(".js__result");

let rateEUR = 4.53;
let rateUSD = 4.2;
let rateUAH = 0.11;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;

    case "USD":
      result = amount / rateUSD;
      break;

    case "UAH":
      result = amount / rateUAH;
      break;
  }
  resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
});
