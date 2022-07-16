const contactBtn = document.querySelector(".contact-btn-1");
const aboutBtn = document.querySelector(".about-btn-1");
const contactBtn2 = document.querySelector(".contact-btn");

const contactSect = document.querySelector(".contact-me-container");
const aboutSect = document.querySelector(".about-me-container");

contactBtn.addEventListener("click", () => {
  contactSect.scrollIntoView();
});
contactBtn2.addEventListener("click", () => {
  contactSect.scrollIntoView();
});

aboutBtn.addEventListener("click", () => {
  contactSect.scrollIntoView();
});
