const form = document.querySelector("form");

function formSending(response) {
  if (response.ok) {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'>See you later...</p>";
  } else {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;><span style='color: #E00000'>Error</span> in sending, you can send it directly to our email: contactwebdesigner7@gmail.com</p>";
  }
}

function sendFrom(event) {
  event.preventDefault();
  const button = document.querySelector("form button");
  button.disable = true;
  button.innerText = "Sending...";

  const data = new FormDataEvent(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formSending);
}

form.addEventListener("submit", sendFrom);
