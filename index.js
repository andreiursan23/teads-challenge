// Variables
const contentEl = document.getElementById("content");
const adSlides = document.querySelectorAll(".img");
const myImg = document.querySelector(".img");

let animationStep = 0;

// Mutate din scrollAnimation:
const adBoxHeight = imgHeight(myImg);
const windowHeight = window.innerHeight;
const transitioningInterval =
  (windowHeight - adBoxHeight) / (adSlides.length + 2);
let animationTriggerPoint = windowHeight - 2 * transitioningInterval;

let target;
function updateScroll() {
  target = window.scrollY || window.pageYOffset;
  console.log(`Scroll Y is: ${target}`);
}

// Listen for `scroll` event to update `target` scroll position
window.addEventListener("scroll", updateScroll);

// Helper functions
function imgHeight(element) {
  return element.clientHeight;
}

function adjustAdHeight(element, height) {
  element.style.height = height + "px";
}

window.addEventListener("scroll", scrollAnimation);

function scrollAnimation() {
  // Adjust ad box height based on width
  adjustAdHeight(contentEl, imgHeight(myImg));

  // Establish trigger and opacity transitioning intervals
  let adBoxBottom = contentEl.getBoundingClientRect().bottom;

  const isAnimationTriggered =
    adBoxBottom < animationTriggerPoint ? true : false;

  if (isAnimationTriggered) {
    adSlides[animationStep].style.opacity = 0;
    adSlides[animationStep + 1].style.opacity = 1;
    adBoxBottom -= transitioningInterval;
  } else {
    adSlides[animationStep].style.opacity = 1;
    adSlides[animationStep + 1].style.opacity = 0;
  }

  console.log(`Window height: ${windowHeight}`);
  console.log(`Ad box bottom: ${adBoxBottom}`);
  console.log(`Transitioning interval: ${transitioningInterval}`);
  console.log(`Animation trigger point: ${animationTriggerPoint}`);
  console.log(`Animation step: ${animationStep}`);
  console.log(isAnimationTriggered);
}