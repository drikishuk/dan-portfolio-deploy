function init() {
  startTime = new Date();

  ///having a delay to the start has fixed some issues in safari with text line breaks being off when font isn't loaded yet
  var tlStart = new TimelineMax({ onComplete: init2 });

  tlStart.to(["#main_container"], 0, { top: 0, delay: 0.1 });
  tlStart.to("#main_content", 0, { rotation: 0.1 })
}

var tl, tl2;

function init2() {
  tl = new TimelineMax({ onComplete: endTime });
  tl2 = new TimelineMax();

  addListeners();

  doAnimation();
}

function setElements() {}

function doAnimation() {
  tl2.to('#bg-1', 5, { transform: "translate3d(0, 0, 0) scale(1.1)" }, 0)
  tl2.to('#bg-2', 10, { transform: "translate3d(0, 0, 0) scale(1.2)" }, 4)

  tl.to('#main_content', 0.5, { autoAlpha: 1, ease: "power1.out" }, 0);
  tl.staggerTo('.text-1', 0.5, { autoAlpha: 1, y: '-=18', ease: "power1.out" }, 0.125, '+=0');

  tl.to('#roundel-1', 0.3, { autoAlpha: 1, scale: 1.25, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-1', 0.2, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-1a', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.out" }, '+=0');
  tl.to('#roundel-1b', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '-=0.4');

  tl.to('#roundel-1-container', 0.5, { autoAlpha: 0, scale: 0, ease: "power1.out" }, '+=1.5');
  tl.to('.text-1', 0.5, { autoAlpha: 0, ease: "power1.in" }, '-=0.5');
  tl.to('#bg-1', 0.5, { autoAlpha: 0, ease: "power1.in" }, '-=0.25');

  tl.staggerTo('.text-2', 0.5, { autoAlpha: 1, y: '-=18', ease: "power1.out" }, 0.125, '+=0');

  tl.to('#roundel-2', 0.3, { autoAlpha: 1, scale: 1.25, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-2', 0.2, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-2a', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.out" }, '+=0');
  tl.to('#roundel-2b', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '-=0.4');

  tl.to('#roundel-2-container', 0.5, { autoAlpha: 0, scale: 0, ease: "power1.out" }, '+=1.5');
  tl.to('.text-2', 0.5, { autoAlpha: 0, ease: "power1.in" }, '-=0.5');

  tl.staggerTo('.text-3', 0.5, { autoAlpha: 1, y: '-=18', ease: "power1.out" }, 0.125, '+=0');

  tl.to('#roundel-3', 0.3, { autoAlpha: 1, scale: 1.25, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-3', 0.2, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '+=0');
  tl.to('#roundel-3a', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.out" }, '+=0');
  tl.to('#roundel-3b', 0.5, { autoAlpha: 1, scale: 1, ease: "power1.inOut" }, '-=0.4');

  tl.to('#roundel-3-container', 0.5, { autoAlpha: 0, scale: 0, ease: "power1.out" }, '+=1.5');
  tl.to('.text-3', 0.5, { autoAlpha: 0, ease: "power1.in" }, '-=0.5');

  tl.to('#text-4a', 0.5, { autoAlpha: 1, ease: "power1.out" }, '+=0.5');
  tl.to('#text-4b', 0.5, { autoAlpha: 1, x: '-=35', ease: "power1.out" }, '-=0.25');
  tl.to('#text-4c', 0.5, { autoAlpha: 1, scale: 1.4, ease: "power1.inOut" }, '-=0.5');
  tl.to('#text-4d', 0.5, { autoAlpha: 1, x: '+=43', ease: "power1.inOut" }, '-=0.5');

  tl.to('#text-4b', 0.5, { autoAlpha: 1, x: '+=20', ease: "power1.out" }, '+=0');
  tl.to('#text-4c', 0.5, { autoAlpha: 1, scale: 1, y: '-=4', ease: "power1.inOut" }, '-=0.5');
  tl.to('#text-4d', 0.5, { autoAlpha: 1, x: '-=24', ease: "power1.inOut" }, '-=0.5');

  tl.to('#cta', 0.3, { scale: 1.1, ease: "power1.inOut" }, '+=0');
  tl.to('#cta', 0.2, { scale: 1, ease: "power1.inOut" }, '+=0');
  tl.to('#cta', 0.3, { scale: 1.1, ease: "power1.inOut" }, '+=0.2');
  tl.to('#cta', 0.2, { scale: 1, ease: "power1.inOut" }, '+=0');

}

function addListeners() {
  document
    .getElementById("default_exit")
    .addEventListener("click", bgExitHandler, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", ctaRollover, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", ctaRollout, false);
}

function bgExitHandler(e) {
  window.open(clickTag, "_blank");
}

function ctaRollover () {
  TweenMax.to('#cta', 0.25, { scale: 1.1 })
}

function ctaRollout () {
  TweenMax.to('#cta', 0.25, { scale: 1 })
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
