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

const buttons = {
  prev: document.querySelector(".left-btn"),
  next: document.querySelector(".right-btn"),
};
const cardContainerEl = document.querySelector(".card-container");

// 왼쪽 오른쪽 슬라이드 버튼
buttons.next.addEventListener("click", () => swapCards("right"));
buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
  swapCardsClass(direction);
}

function swapCardsClass(direction) {
  const currentCardEl = cardContainerEl.querySelector(".current-card");
  const prevCardEl = cardContainerEl.querySelector(".prev-card");
  const nextCardEl = cardContainerEl.querySelector(".next-card");
  const prevLeftCardEl = cardContainerEl.querySelector(".prev-left-card");
  const nextRightCardEl = cardContainerEl.querySelector(".next-right-card");

  currentCardEl.classList.remove("current-card");
  prevCardEl.classList.remove("prev-card");
  nextCardEl.classList.remove("next-card");
  prevLeftCardEl.classList.remove("prev-left-card");
  nextRightCardEl.classList.remove("next-right-card");

  if (direction === "right") {
    currentCardEl.classList.add("prev-card");
    prevCardEl.classList.add("prev-left-card");
    prevLeftCardEl.classList.add("next-right-card");
    nextCardEl.classList.add("current-card");
    nextRightCardEl.classList.add("next-card");
  } else if (direction === "left") {
    currentCardEl.classList.add("next-card");
    prevCardEl.classList.add("current-card");
    prevLeftCardEl.classList.add("prev-card");
    nextCardEl.classList.add("next-right-card");
    nextRightCardEl.classList.add("prev-left-card");
  }
}

(() => {
  window.addEventListener('resize', (e) => {
    console.log('resize');
  });
})();
