const form = document.getElementById("form");
let input = "";
const first = document.querySelector(".signup");
const second = document.querySelector(".success");
confirm = second.querySelector(".confirm");
errorMessages = form.querySelector(".error-messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("have i waited too lojng agains");
  const data = Object.fromEntries(new FormData(e.target));
  input = data.email;

  if (validateEmail(input) == true) {
    messages = [];
    first.style.display = "none";
    second.style.display = "flex";
    confirm.innerHTML = `A confirmation email has been sent to <b> ${input}. </b> 
    Please open it and click the button inside to confirm your subscription.`;
  } else {
    if (!form.classList.contains("error")) {
      form.classList.add("error");
      errorMessages.classList.add("error");

      //
    }
    errorMessages.innerText = messages[0];
  }
});

function validateEmail(one) {
  messages = [];
  console.log(one);
  if (one == "") {
    console.log("empty");
    messages.push("its empty");
    return false;
  }
  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(one)) {
    console.log("thats a shit email");
    messages.push("enter an actual email");
    return false;
  }
  return true;
}
