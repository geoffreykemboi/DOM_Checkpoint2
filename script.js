document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorButton = document.getElementById("change-color-button");
  //Fuction to generate a random colour
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
       //change colour button
      changeColorButton.addEventListener("click", function () {
          colorBox.style.backgroundColor = getRandomColor();
      });
});

