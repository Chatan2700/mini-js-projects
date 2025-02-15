const reviews = [
  {
    name: "Lucía Fernández",
    job: "UX Designer",
    text: "Increíble experiencia de usuario. El diseño es intuitivo y atractivo.",
    img: "https://media.istockphoto.com/id/1487465664/photo/portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=wS14CqknuT6mj3bnzopHuMbyhSernzpXIKeKFJhHDro=",
  },
  {
    name: "Carlos Méndez",
    job: "Data Analyst",
    text: "Los datos están bien organizados y permiten obtener insights valiosos.",
    img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=700&auto=format&fit=crop&q=60",
  },
  {
    name: "Elena Soto",
    job: "Product Manager",
    text: "Me encantó la funcionalidad y la facilidad de uso de esta aplicación.",
    img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=",
  },
  {
    name: "Sebastian Rios",
    job: "Software Engineer",
    text: "XYZ Software offers a sleek, user-friendly interface with fast, reliable performance and powerful features. It's an excellent choice for productivity with top-notch security and great support.",
    img: "/2.jpg",
  },
];

// Define DOM elements
let profileImg = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
const surprisebtn = document.querySelector("#surprise-btn");

// Random function
function showRandomReview() {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  const review = reviews[randomIndex];
  updateDom(review);
}

// update the DOM
function updateDom(review) {
  profileImg.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.text;
}

// Surprise btn
surprisebtn.addEventListener("click", showRandomReview);
