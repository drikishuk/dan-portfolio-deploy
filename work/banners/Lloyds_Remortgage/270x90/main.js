// Banner duration timer start time
var startTime;


// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  tl = gsap.timeline({
    // repeat: 1, 
    // repeatDelay: 1.5 
  });

  animate();
  setRollover();
}

function animate() {
  tl.set([".hidden"], { autoAlpha: 0 });
  tl.set(["#main"], { autoAlpha: 1, force3D: true });

  tl.to(".part-one", 0.5, { autoAlpha: 1, ease: Power1.easeIn })
  tl.from(".part-one", 0.8, { y: -20, ease: "bounce.out" }, "-=0.5")
  // tl.to(".part-two", 0.5, { autoAlpha: 1, ease: Power1.easeIn }, "+=0")
  // tl.from(".part-two", 0.8, { y: -20, ease: "bounce.out" }, "<")

  tl.to("#text1", 0.8, { autoAlpha: 0, ease: Power1.easeIn }, "+=2")
  tl.to(".part-three", 0.5, { autoAlpha: 1, ease: Power1.easeIn }, "+=0")
  tl.from(".part-three", 0.8, { y: -20, ease: "bounce.out" }, "<")
  tl.to("#animation", 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "+=0")

  tl.to(["#text2", "#animation"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, "+=2")
  tl.to("#text3", 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "+=0")

  tl.to("#text3", 0.5, { autoAlpha: 0, ease: Power1.easeOut }, "+=2")
  tl.to("#logo", 0.5, { y: '-=12', ease: Power1.easeOut }, "<")
  tl.to(["#text4-a", "#text4-b", "#text5", "#text6"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "+=0")


  tl.to("#cta", 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "+=1")
  tl.to("#cta", 0.5, { scale: 1.1, ease: Power1.easeOut }, "+=0")
  tl.to("#cta", 0.5, { scale: 1, ease: Power1.easeOut }, "+=0")
  tl.to("#cta", 0.5, { scale: 1.1, ease: Power1.easeOut }, "+=0")
  tl.to("#cta", 0.5, { scale: 1, ease: Power1.easeOut }, "+=0")
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor:"#fff" });
}

function default_out(event) {
  TweenMax.to(["#cta"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor:"#C7FFC6" });
}


