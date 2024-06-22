document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const carouselContainer = document.querySelector(".carousel-container");

  let counter = 0;
  const cardWidth = document.querySelector(".car").offsetWidth;
  const maxCardsToShow = 5;
  const maxCounter = -(maxCardsToShow - 1) * cardWidth;
  const cardsCount = document.querySelectorAll(".car").length;
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

  //Filter Button
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      filterItems(filter);
      setActiveButton(button);
    });
  });

  const filterItems = (filter) => {
    galleryItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const setActiveButton = (activeButton) => {
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    activeButton.classList.add("active");
  };
});
