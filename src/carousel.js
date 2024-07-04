export function Carousel() {
  let slides = document.querySelectorAll("li");

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

  const ul = document.querySelector("ul");

  ul.insertBefore(leftArrowElement, ul.firstChild);
  ul.appendChild(rightArrowElement);
}
