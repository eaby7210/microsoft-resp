banner = document.querySelector(".show-banner");
nxtBtn = document.querySelector(".next-btn");
prevBtn = document.querySelector(".prev-btn");
indicators = document.querySelectorAll(".indicators > li > i");
playPause = document.querySelector(".play-pause-btn");
bannerElems = Array.from(banner.children);
let swing = 0;
let autoScrollFlag = 1;

const autoScroll = () => {
  if (autoScrollFlag === 1) {
    if (swing === 0) {
      nextBtnAction();
      swing = 1;
    } else {
      prevBtnAction();
      swing = 0;
    }
  }
};

const nextBtnAction = () => {
  const currentSlide = banner.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveSlide(banner, currentSlide, nextSlide);
  const circle = document.querySelector(".indicators > li > i.fa-circle");
  circleNext = circle.parentElement.nextElementSibling.children[0];
  indicatorReplace(circle, circleNext);
};

const prevBtnAction = () => {
  const currentSlide = banner.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveSlide(banner, currentSlide, prevSlide);
  const circle = document.querySelector(".indicators > li > i.fa-circle");
  circlePrev = circle.parentElement.previousElementSibling.children[0];
  indicatorReplace(circle, circlePrev);
};

const slideWidth = bannerElems[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = (slideWidth + 100) * index + "px";
};
const moveSlide = (container, currentSlide, targetSlide) => {
  container.style.transform = "translate(-" + targetSlide.style.left;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const indicatorReplace = (currentCircle, targetCircle) => {
  currentCircle.classList.replace("fa-circle", "fa-circle-dot");
  targetCircle.classList.replace("fa-circle-dot", "fa-circle");
};
bannerElems.forEach(setSlidePosition);

nxtBtn.addEventListener("click", nextBtnAction);
prevBtn.addEventListener("click", prevBtnAction);
playPause.addEventListener("click", (e) => {
  btn = e.target.classList;
  console.log(btn.contains("fa-play"));
  if (btn.contains("fa-pause") && btn.replace("fa-pause", "fa-play")) {
    autoScrollFlag = 0;
  } else if (btn.contains("fa-play") && btn.replace("fa-play", "fa-pause")) {
    autoScrollFlag = 1;
  }
  console.log(autoScroll);
});
setInterval(autoScroll, 3000);
