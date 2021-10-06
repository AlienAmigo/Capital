function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  let mySliderNum = new Glide("#slider-num", {
    autoplay: 3500,
    type: "carousel",
    startAt: 0,
    perView: 1,
  });

  mySliderNum.mount();

  let mySliderImg = new Glide("#slider-img", {
    autoplay: 3500,
    type: "carousel",
    startAt: 0,
    perView: 1,
  });

  mySliderImg.mount();

  const myBenefitsItems = document.querySelectorAll(".benefits-item");

  const isFullyVisible = (el) => {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    return top >= 0 && bottom <= window.innerHeight;
  };

  window.addEventListener("scroll", (ev) => {
    myBenefitsItems.forEach((item) => {
      isFullyVisible(item) &&
        item.classList.contains("invisible") &&
        item.classList.remove("invisible");
    });
  });

  console.log(myBenefitsItems);
});
