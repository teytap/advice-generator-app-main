const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const adviceId = document.getElementById("advice-id");
const apiUrl = `https://api.adviceslip.com/advice`;

// function getQuote(response) {
//   quote.innerHTML = `"${response.data.slip.advice}"`;
//   adviceId.innerHTML = response.data.slip.id;
// }

// function newQuote(event) {
//   event.preventDefault();
//   axios.get(apiUrl).then(getQuote);
// }
// btn.addEventListener("click", newQuote);
// axios.get(apiUrl).then(getQuote);
async function getQuote() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  quote.innerHTML = `"${data.slip.advice}"`;
  adviceId.innerHTML = data.slip.id;
}
getQuote();

btn.addEventListener("click", getQuote);
