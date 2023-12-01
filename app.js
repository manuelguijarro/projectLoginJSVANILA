//create const for input password and username and button 
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

//Evento para el boton, hacer click y validar datos con base de datos.
btn.addEventListener("click", (e) => {
  //Para que no se envien los datos, se evita el evento y asi podriamos
  //hacer un update o validar los datos
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please enter username and password");
  } else {
    alert("Login successful");
    window.location.href = "home.html";
    username.value = "";
    password.value = "";
  }});
//Con los eventos blur verificamos si una vez que el usuario hace click fuera
// se lanza un aviso.
username.addEventListener("blur", () => {
  validateData();
});

password.addEventListener("blur", () => {
  validateData();
});

// Add event listener for focus on button
btn.addEventListener("focus", () => {
  validateData();
});

// Function to validate data and redirect to home page with alert message
function validateData() {
  if (username.value === "" || password.value === "") {
    alert("Please enter username and password");
  } else {
    alert("Login successful");
    window.location.href = "home.html";
    username.value = "";
    password.value = "";
  }
}

