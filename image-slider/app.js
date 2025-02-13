// list of images
const images = ["1", "2", "3"];
const sliderContainer = document.querySelector(".slider-container");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;

images.forEach((img, index) => {
  let image = document.createElement("img");
  image.src = `/image-slider/${img}.jpg`;
  image.alt = `slide ${index + 1}`;
  console.log(`Image uploaded: ${image.alt}`);
  sliderContainer.appendChild(image);

  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot-active");
  dotsContainer.appendChild(dot);
});

function nextImg() {
  sliderContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  nextImg();
}, 3000);

//another way to to the loop
// for (const [index, element] of images.entries()) {
//   console.log(`Index ${index + 1}, Element ${element}`);
// }

// to ensure the looping of an index
// for (let i = 0; i < 10; i++) {
//   console.log(i % 3); // Always cycles through 0, 1, 2, 0, 1, 2...
// }
