export function Carousel(carouselElement) {
  let slides = carouselElement.querySelectorAll("li");

  this.index = 0;
  this.next = function (deltaIndex) {
    let currentIndex = this.index + deltaIndex;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    this.index = currentIndex;
  };

  for (let i = 0; i < slides.length; i++) {
    slides.item(i).classList.add("carousel-item");
    if (i === 0) {
      slides.item(i).classList.add("active");
    }
    slides.item(i).querySelector("img").classList.add("slide");
  }

  const leftArrowElement = document.createElement("span");
  leftArrowElement.classList.add("left-arrow");
  leftArrowElement.innerHTML = `<img src="./images/left_arrow.svg"/>`;

  const rightArrowElement = document.createElement("span");
  rightArrowElement.classList.add("right-arrow");
  rightArrowElement.innerHTML = `<img src="./images/right_arrow.svg"/>`;

  carouselElement.insertBefore(leftArrowElement, carouselElement.firstChild);
  carouselElement.appendChild(rightArrowElement);

  rightArrowElement.addEventListener("click", () => {
    const activeSlide = carouselElement.querySelector(".active");
    activeSlide.classList.remove("active");
    this.next(1);
    slides.item(this.index).classList.add("active");
  });

  leftArrowElement.addEventListener("click", () => {
    const activeSlide = carouselElement.querySelector(".active");
    activeSlide.classList.remove("active");
    this.next(-1);
    slides.item(this.index).classList.add("active");
  });

  //автопролистывание
  setInterval(() => {
    rightArrowElement.dispatchEvent(new Event("click"));
  }, 3000);
}
