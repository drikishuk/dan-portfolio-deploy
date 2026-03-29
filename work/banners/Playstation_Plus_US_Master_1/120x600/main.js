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
  // tl1.set(["#cta"], { force3D: false, rotation: .001 });
  tl1.set([".hidden"], { autoAlpha: 0 });
  
  tl1.to('#main', 0.5,{ autoAlpha: 1, ease: "power1.out" }, 0);
  tl1.to('#image-1', 1,{ y: '+=500', ease: "power1.out" }, 0);
  tl1.to('#logo-1', 0.5,{ autoAlpha: 1, ease: "power1.out" }, '-=0.3');
  tl1.to('#text-1', 0.5,{ autoAlpha: 1, ease: "power1.out" }, '+=0');
  
  tl1.to('#image-2', 1,{ y: '+=500', ease: "power4.out" }, '+=2');
  tl1.to('#text-1', 0.5,{ autoAlpha: 0, ease: "power1.out" }, '<');
  tl1.to('#text-2', 0.5,{ autoAlpha: 1, ease: "power1.out" }, '-=0.6');
  tl1.to('#image-1', 0,{ autoAlpha: 0, ease: "power1.out" }, '+=0');
  
  tl1.to('#image-3', 1,{ y: '+=500', ease: "power4.out" }, '+=2');
  tl1.to('#text-2', 0.5,{ autoAlpha: 0, ease: "power1.out" }, '<');
  tl1.to(['#text-3', '#tier'], 0.5,{ autoAlpha: 1, ease: "power1.out" }, '-=0.6');
  tl1.to('#image-2', 0,{ autoAlpha: 0, ease: "power1.out" }, '+=0');
  tl1.to(['#brand_cta_outer', '#text-legal'], 0.5,{ autoAlpha: 1, ease: "power1.out" }, '+=0');

  tl2.to('#bg-2', 1,{ y: '+=500', ease: "power1.out" }, 0);
  tl2.to('#bg-3', 1,{ y: '+=500', ease: "power1.out" }, 0);
  tl2.to('#bg-4', 1,{ y: '+=575', ease: "power1.out" }, 0);
  tl2.to('#bg-5', 1,{ y: '+=650', ease: "power1.out" }, 0);
  tl2.to('#bg-6', 1,{ y: '+=725', ease: "power1.out" }, 0);
  tl2.to(['#bg-2', '#bg-3', '#bg-4', '#bg-5'], 11,{ y: '+=40', ease: "none" }, '+=0');
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

// function default_over(event) {
//   TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1.1)", ease: Power1.easeOut, delay: 0 });
// }

// function default_out(event) {
//   TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1)", ease: Power1.easeOut, delay: 0 });
// }

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
