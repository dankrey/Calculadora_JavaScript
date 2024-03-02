const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let currentExpression = ""; // Variable para mantener la expresión actual

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      currentExpression = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      currentExpression = currentExpression.substr(0, currentExpression.length - 1);
    } else if (item.id == "equal") {
      try {
        display.innerText = eval(currentExpression);
        currentExpression = eval(currentExpression).toString(); // Actualizar la expresión actual con el resultado
      } catch (error) {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else if (item.id == ".") {
      // Agregar punto decimal solo si el último caracter de la expresión no es ya un punto decimal
      if (!currentExpression.match(/[.]\d*$/)) {
        display.innerText += ".";
        currentExpression += ".";
      }
    } else if (item.id == "%") {
      // Calcular el porcentaje
      const expression = currentExpression + "*0.01"; // Convertir el porcentaje a fracción decimal
      try {
        display.innerText = eval(expression);
        currentExpression = eval(expression).toString(); // Actualizar la expresión actual con el resultado
      } catch (error) {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += item.id;
      currentExpression += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

// Función para cambiar entre las imágenes de sol y luna
function toggleThemeIcon() {
  if (isDark) {
    toggleIcon.src = "sol.png"; // Ruta de la imagen del sol
  } else {
    toggleIcon.src = "luna.png"; // Ruta de la imagen de la luna
  }
}

// Agrega el evento de clic al botón de cambio de tema
themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  toggleThemeIcon(); // Cambia la imagen del botón de cambio de tema
});
