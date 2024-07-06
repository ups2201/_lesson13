import "./styles.css";
import { Carousel } from "./carousel.js";
import image1 from "./images/1.svg";
import image2 from "./images/2.svg";
import image3 from "./images/3.svg";
import image4 from "./images/left_arrow.svg";
import image5 from "./images/right_arrow.svg";

const carouselElement = document.querySelector("ul");
new Carousel(carouselElement);
