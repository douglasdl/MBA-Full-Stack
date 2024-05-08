const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  const hasRegexCharacteres = /\D+/g
  amount.value = amount.value.replace(hasRegexCharacteres, "");
  console.log(amount.value);
})

form.onsubmit = (event) => {
  event.preventDefault();

  console.log(currency.value);
}