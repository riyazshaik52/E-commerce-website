let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);
