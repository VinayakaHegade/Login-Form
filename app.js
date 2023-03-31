const form = document.querySelector("form");
const emailSection = form.querySelector(".email");
const email = document.getElementById("email");
const passwordSection = form.querySelector(".password");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  // trim method to remove the white spaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // preventing form from submitting
  e.preventDefault();

  checkEmail();
  checkPassword();

  // remove shake class after 500ms
  setTimeout(() => {
    emailSection.classList.remove("shake");
    passwordSection.classList.remove("shake");
  }, 500);

  // if email and password section element doesn't contain error class, then we can say user has entered valid details
  if (
    !emailSection.classList.contains("error") &&
    !passwordSection.classList.contains("error")
  ) {
    window.location.href = "#"; // just replace # with url wherever you want to redirect
  }

  function checkEmail() {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex to validate email

    if (!emailValue.match(pattern)) {
      if (!emailSection.classList.contains("error")) {
        emailSection.classList.add("shake", "error");
      } else if (!emailSection.classList.contains("shake")) {
        emailSection.classList.add("shake");
      }
      let errorText = emailSection.querySelector(".error-text");
      emailValue !== ""
        ? (errorText.innerText = "Enter a valid email address")
        : (errorText.innerText = "Email cannot be blank");
    } else {
      emailSection.classList.remove("shake", "error");
    }
  }

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
