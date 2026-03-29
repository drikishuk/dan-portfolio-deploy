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
}

function animate() {
  tl.set([".hidden"], { autoAlpha: 0 });
  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  // Target the text elements
  const texts = document.querySelectorAll('.text');
  // Define the bounce animation for each text element
  
  tl.to(['#logo', '#logo-text', '#legal'], 0.5, {autoAlpha:1, ease: "power2.inOut"}, 0);
  tl.to("#text1", 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 0)
  tl.from("#text1", 0.8, { y: -20, ease: "bounce.out" }, "-=0.5")

  tl.from("#text1", 0.8, { autoAlpha: 0, ease: Power1.easeIn }, "+=2")
  tl.to("#text2", 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "+=0")
  tl.from("#text2", 0.8, { y: -20, ease: "bounce.out" }, "-=0.5")

  tl.to(cta, 0.5, {autoAlpha:1, ease: "power2.inOut"},"+=1");
  tl.call(setRollover, null, "<")
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
  TweenMax.to(["#cta"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
  TweenMax.to(["#cta-roll"], 0.3, { autoAlpha: 1, scale: 1.1, ease: Power1.easeOut, delay: 0 }, '<');
}

function default_out(event) {
  TweenMax.to(["#cta"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
  TweenMax.to(["#cta-roll"], 0.3, { autoAlpha: 0, scale: 1, ease: Power1.easeOut, delay: 0 }, '<');
}
