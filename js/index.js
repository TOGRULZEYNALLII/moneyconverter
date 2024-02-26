const url = "http://localhost:3000/currencies";
const input1 = document.getElementById("input1");
const button = document.getElementById("button");
const ul = document.getElementById("ul");
async function fetchdata() {
  const response = await fetch(url);
  const data = await response.json();
  clicked(data);
}

fetchdata();
function clicked(data) {
  button.addEventListener("click", () => {
    const li = document.createElement("li");
    const rate = data[0].rate;
    const manat = data[1].rate;
    const values = input1.value;
    const result = values * manat;
    li.textContent = result;
    ul.appendChild(li);
    nese(data);
  });
}
