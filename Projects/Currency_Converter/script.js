async function convertCurrency() {
  const amount = document.getElementById("amount").value;

  const from = document.getElementById("country1").value.split(",")[0];

  const to = document.getElementById("country2").value.split(",")[0];

  if (!amount || amount <= 0) {
    alert("Enter valid amount");

    return;
  }

  const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  const response = await fetch(API);

  const data = await response.json();

  const rate = data[from][to];

  const finalAmount = amount * rate;

  document.getElementById("result").innerText =
    `${finalAmount.toFixed(2)} ${to.toUpperCase()}`;

  document.getElementById("rateText").innerText =
    `1 ${from.toUpperCase()} = ${rate.toFixed(2)} ${to.toUpperCase()}`;
}


document.getElementById("country1").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag1").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});


document.getElementById("country2").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag2").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});


function swapCurrency() {
  const country1 = document.getElementById("country1");

  const country2 = document.getElementById("country2");

  const temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  country1.dispatchEvent(new Event("change"));

  country2.dispatchEvent(new Event("change"));
}
