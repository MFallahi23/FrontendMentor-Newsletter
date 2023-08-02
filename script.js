// --Constants---------------------------------------------------
const form = document.querySelector(".start__form");
const startSection = document.querySelector(".start");
const successSection = document.querySelector(".success");
const error = document.querySelector("#error");
const email = document.querySelector("#email");
const emailSuccess = document.querySelector("#succesEmail");
const succesButton = document.querySelector("#success__button");
let errorMessage = "Valid email required";

const submit = () => {
  startSection.style.display = "none";
  successSection.style.display = "block";
};
const returnToStart = () => {
  successSection.style.display = "none";
  startSection.style.display = "flex";
  email.classList.remove("invalid");
  error.innerHTML = "";
  emailSuccess.innerHTML = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    submit();
    emailSuccess.innerHTML = " " + email.value;
  } else {
    email.classList.add("invalid");
    email.focus();
    error.innerHTML = errorMessage;
  }
});
