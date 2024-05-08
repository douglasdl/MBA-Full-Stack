const amount = document.getElementById("amount");

amount.addEventListener("input", () => {
  const hasRegexCharacteres = /\D+/g
  amount.value = amount.value.replace(hasRegexCharacteres, "");
  console.log(amount.value);
})