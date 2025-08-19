const form = document.querySelector("#i-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const p = parseFloat(document.querySelector("#principle").value);
  const r = parseFloat(document.querySelector("#percent").value);
  const t = parseFloat(document.querySelector("#time").value);

  if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
    result.innerText = "⚠️ Please enter valid positive numbers!";
    result.style.color = "yellow";
  } else {
    const i = ((p * r * t) / 100).toFixed(2);
    result.innerText = `✅ Simple Interest = ₹${i}`;
    result.style.color = "#ffffff";
  }
});
