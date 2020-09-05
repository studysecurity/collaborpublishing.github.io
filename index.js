"use strict";

const navIcon = document.querySelector(".nav-icon");

navIcon.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV" || event.target.tagName === "SPAN") {
    if (event.target.tagName === "DIV") {
      navIcon.classList.toggle("open");
    } else {
      event.target.parentNode.classList.toggle("open");
    }
  }
});
