// list of images
const images = ["1", "2", "3"];
const sliderContainer = document.querySelector(".slider-container");
const dotsContainer = document.querySelector(".dots-container");

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

// for (const [index, element] of images.entries()) {
//   console.log(`Index ${index + 1}, Element ${element}`);
// }

