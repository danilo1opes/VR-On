// Menu Active
const links = document.querySelectorAll(".header-menu a");

function activeLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLinks);

//Active Items Budget

const parameters = new URLSearchParams(location.search);

function activeProduct(parameters) {
  const element = document.getElementById(parameters);
  if (element) {
    element.checked = true;
  }
  console.log(parameters);
}

parameters.forEach(activeProduct);

console.log(parameters);

// Questions

const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answers = document.getElementById(controls);

  answers.classList.toggle("active");
  const active = answers.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventQuestion(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventQuestion);

console.log(questions);

// Gallery

const gallery = document.querySelectorAll(".vron-image img");
const galleryContainer = document.querySelector(".vron-image");

function chooseImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 800px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", chooseImage);
}

gallery.forEach(eventsGallery);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
