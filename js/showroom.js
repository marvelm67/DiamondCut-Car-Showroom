const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselContainer = document.querySelector(".carousel-container");

let counter = 0;
const cardWidth = document.querySelector(".car2").offsetWidth;
const maxCardsToShow = 5;
const maxCounter = -(maxCardsToShow - 1) * cardWidth;
const cardsCount = document.querySelectorAll(".car2").length;
const maxWidth = -(cardsCount - maxCardsToShow) * cardWidth;

prevBtn.addEventListener("click", function () {
  if (counter < 0) {
    counter += cardWidth;
    if (counter > 0) {
      counter = 0;
    }
    carouselContainer.style.transform = `translateX(${counter}px)`;
  }
});

nextBtn.addEventListener("click", function () {
  if (counter > maxWidth) {
    counter -= cardWidth;
    if (counter < maxCounter) {
      counter = maxCounter;
    }
    carouselContainer.style.transform = `translateX(${counter}px)`;
  }
});
