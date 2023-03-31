const form = document.querySelector("form");
const emailSection = form.querySelector(".email");
const email = document.getElementById("email");
const passwordSection = form.querySelector(".password");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // trim method to remove the white spaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Validate the email and password
  checkEmail();
  checkPassword();

  // Remove the shake class after 500ms
  setTimeout(() => {
    emailSection.classList.remove("shake");
    passwordSection.classList.remove("shake");
  }, 500);

  // If the email and password sections don't contain the error class, redirect the user to the desired location
  if (
    !emailSection.classList.contains("error") &&
    !passwordSection.classList.contains("error")
  ) {
    window.location.href = "#"; // Replace "#" with the desired location
  }

  // Check if the email is valid
  function checkEmail() {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex to validate email

    if (!emailValue.match(pattern)) {
      if (!emailSection.classList.contains("error")) {
        emailSection.classList.add("shake", "error");
      } else if (!emailSection.classList.contains("shake")) {
        emailSection.classList.add("shake");
      }

      const errorText = emailSection.querySelector(".error-text");
      emailValue !== ""
        ? (errorText.innerText = "Enter a valid email address")
        : (errorText.innerText = "Email cannot be blank");
    } else {
      emailSection.classList.remove("shake", "error");
    }
  }

  // Check if the password is valid
  function checkPassword() {
    if (passwordValue.length < 8) {
      if (!passwordSection.classList.contains("error")) {
        passwordSection.classList.add("shake", "error");
      } else if (!passwordSection.classList.contains("shake")) {
        passwordSection.classList.add("shake");
      }

      let errorText = passwordSection.querySelector(".error-text");
      passwordValue !== ""
        ? (errorText.innerText =
            "Enter a valid password, cannot be less than 8 characters")
        : (errorText.innerText = "Password cannot be blank");
    } else {
      passwordSection.classList.remove("shake", "error");
    }
  }

});
