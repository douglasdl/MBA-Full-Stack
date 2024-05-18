
// const USD = await fetch("https://api.aoikujira.com/kawase/json/usd");
const USD = 5.17;
const EUR = 5.35;
const GBP = 5.78;


const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

amount.addEventListener("input", () => {
  const hasRegexCharacteres = /\D+/g
  amount.value = amount.value.replace(hasRegexCharacteres, "");
  console.log(amount.value);
})

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    default:
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert("ERRO", "Não foi possível converter. Tente novamente mais tarde.");
  }
}