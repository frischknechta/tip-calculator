document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded");

  document
    .querySelector("#calculateForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const bill = Number(document.getElementById("bill").value);
      const tip = Number(document.getElementById("tip").value);
      let total = document.getElementById("total");

      let calc = 0;

      calc = (bill + (bill * tip) / 100).toFixed(2);

      total.innerHTML = calc;
    });
});
