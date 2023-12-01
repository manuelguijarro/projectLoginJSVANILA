//create const for input password and username and button 
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const validatePasswordRegex = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordValue = password.value;
  if (!passwordRegex.test(passwordValue)) return false;
  return true;
};

const areFieldsEmpty = () => {
  return username.value === "" || password.value === "";
};

const clearFields = () => {
  username.value = "";
  password.value = "";
};
const loginSuccessful = () => {
  if (areFieldsEmpty()) {
    alert("Complete all fields");
    return;
  }
  if(!validatePasswordRegex()){
    alert("Password must contain at least 8 characters with at least one uppercase letter, one number, and one special character");
    return;
  }
  
  alert("Login successful");
  clearFields();
  window.location.href = "home.html";
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  loginSuccessful();
});

// Function to validate username input
const validateUsername = () =>  {
  if (!username.value) alert("Please enter username");
}

const validatePassword = () => {
  if (!password.value) alert("Please enter password");
}

username.addEventListener("blur", validateUsername);
password.addEventListener("blur", validatePassword);





