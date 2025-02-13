// configs
const IMAGES = ["1", "2", "3"];
const SLIDER_INTERVAL = 5000;
//DOM Elements
const sliderContainer = document.querySelector(".slider-container");
const dotsContainer = document.querySelector(".dots-container");
if (!sliderContainer || !dotsContainer) {
  throw new Error("Slider/Dots container not found!");
}

let currentIndex = 0;
const dots = [];

IMAGES.forEach((img, index) => {
  //Create IMAGES
  const image = document.createElement("img");
  image.src = `/image-slider/${img}.jpg`;
  image.alt = `Slide ${index + 1}`;
  sliderContainer.appendChild(image);

  //Create DOTS
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute("role", "button");
  dot.setAttribute("tabindex", "0");
  if (index === 0) dot.classList.add("dot-active");
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

const handleDotClick = (index) => {
  currentIndex = index;
  nextImg();
  updateDots();
  resetTimer();
};

// Event delegation for DOTS
dotsContainer.addEventListener("click", (e) => {
  const dotIndex = dots.indexOf(e.target);
  if (dotIndex !== -1) handleDotClick(dotIndex);
});

// sets the active dot to change img
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-active", i === currentIndex);
  });
}

// handles img transitions
function nextImg() {
  sliderContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// updates the slider for the automatic timer change
function updateSlider() {
  currentIndex = (currentIndex + 1) % IMAGES.length;
  nextImg();
  updateDots();
}

let timer;
const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(updateSlider, SLIDER_INTERVAL);
};
resetTimer();
