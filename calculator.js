const buttons = [
  7,
  8,
  9,
  "⌫",
  "AC",
  4,
  5,
  6,
  "x",
  "÷",
  1,
  2,
  3,
  "+",
  "-",
  0,
  ".",
  "%",
  "+/-",
  "=",
];
const container = document.createElement("div");
const buttonContainer = document.createElement("div");
const result = document.createElement("div");
result.classList.add("result");
buttonContainer.classList.add("buttonContainer");
container.classList.add("container");
container.appendChild(result);
for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  if (typeof buttons[i] === "number") {
    button.classList.add("buttonNumbers", "inter");
  } else if (buttons[i] === "AC" || buttons[i] === "⌫") {
    button.classList.add("buttonDeleters", "inter");
  } else {
    button.classList.add("buttonOperators", "inter");
  }
  button.innerHTML = buttons[i];
  buttonContainer.appendChild(button);
  function handleclick() {
    if (buttons[i] === "AC") {
      result.innerHTML = "";
    } else if (buttons[i] === "⌫") {
      result.innerHTML = result.innerHTML.slice(0, -1);
    } else if (buttons[i] === "=") {
      if (result.innerHTML.includes("%")) {
        let per = result.innerHTML.split("%");
        const percentage = parseFloat(per[0]) % parseFloat(per[1]);
        result.innerHTML = parseFloat(percentage.toFixed(10));
      } else if (result.innerHTML.includes("÷")) {
        let per = result.innerHTML.split("÷");
        const division = parseFloat(per[0]) / parseFloat(per[1]);
        result.innerHTML = parseFloat(division.toFixed(10));
      } else if (result.innerHTML.includes("x")) {
        let per = result.innerHTML.split("x");
        const multiplication = parseFloat(per[0]) * parseFloat(per[1]);
        result.innerHTML = parseFloat(multiplication.toFixed(10));
      } else if (result.innerHTML.includes("+")) {
        let per = result.innerHTML.split("+");
        const add = parseFloat(per[0]) + parseFloat(per[1]);
        result.innerHTML = parseFloat(add.toFixed(10));
      } else if (result.innerHTML.includes("-")) {
        let per = result.innerHTML.split("-");
        const minus = parseFloat(per[0]) - parseFloat(per[1]);
        result.innerHTML = parseFloat(minus.toFixed(10));
      }

      console.log(result.innerHTML);
    } else {
      result.innerHTML += buttons[i];
    }
  }
  button.onclick = handleclick;
}
result.classList.add("doto");
container.appendChild(buttonContainer);
document.body.appendChild(container);
