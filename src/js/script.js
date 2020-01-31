function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

  let mySliderNum = new Glide('#slider-num', {
    autoplay: 3500,
    type: 'carousel',
    startAt: 0,
    perView: 1
  });

  mySliderNum.mount();

  let mySliderImg = new Glide('#slider-img', {
    autoplay: 3500,
    type: 'carousel',
    startAt: 0,
    perView: 1
  });

  mySliderImg.mount();
  // console.log('DOM ready');
});
