const resultsfield = document.querySelector("#results");
const pola = document.getElementById("polarity");

export const handleSubmit = (
  baseUrl,
  getBtn,
  area = resultsfield,
  polafield = pola
) => {
   fetch("/article", {
    method: "POST",
    mode:"cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: baseUrl }),
  })
    .then((res) => res.json())
    .then(data => {
      polafield.textContent = `Polarity: ${data.polarity}`;
      area.innerHTML = `<p>${data.text}</p>`;
      getBtn.value = "submit";
    });
};
