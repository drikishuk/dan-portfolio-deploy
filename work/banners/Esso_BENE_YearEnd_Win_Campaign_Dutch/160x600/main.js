// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });
  
  animate();
}

function animate() {

  // tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: .001 });
  tl1.set([".hidden"], { autoAlpha: 0 });
  
  tl1.to(['#main'], 0.5,{ autoAlpha: 1 }, 0);

  tl1.to(['#wheel-inside'], 6,{ rotation: 1080, ease: "power2.in" }, 0);
  tl1.to(['.light'], 0.5,{ autoAlpha: 1 }, 1);
  tl1.staggerTo(['.light'], 0.1,{ autoAlpha: 0 }, 0.05, 2);
  
  tl1.to(['#text-1'], 0.5,{ autoAlpha: 0 }, 4.5);

  tl1.to(['#wheel-container'], 0.5,{ scale: 10, y: '-=796', x: '+=2', ease: "power2.in" }, 5);
  tl1.to(['#logo-2'], 0,{ autoAlpha: 0 }, 5.4);
  tl1.to(['#wheel-container'], 0.1,{ autoAlpha: 0 }, 5.4);

  tl1.to(['#image-1', '#logo-2'], 0.5,{ autoAlpha: 1 }, '+=0.5');
  tl1.to(['#text-2'], 0.5,{ autoAlpha: 1 }, '+=0.5');
  tl1.to(['#cta'], 0.5,{ autoAlpha: 1 }, '+=1');
  tl1.call(setRollover, null, '<');
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
  TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1.1)", ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1)", ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
