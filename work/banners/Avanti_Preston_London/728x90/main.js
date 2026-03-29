// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;
var tl2;
var tl3;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });
  tl3 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  var delayRollover = setTimeout(setRollover, 9000);
  animate();
}

function animate() {

  tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: 0.1 });

  tl1.staggerTo('.animate', 2,{ autoAlpha: 1 }, 1, 0.5);

  tl1.to(['#image-container'], 12.5,{ x: '-=710', rotation: 0.1 }, 2.5);

  tl2.to(['#train'], 10,{ x: '-=165' }, 5);
  tl2.to(['#logo', '#cta'], 1,{ autoAlpha: 1 }, 13);

  tl3.to('#train-2', 12.5, {
    motionPath: {
    path: "#motion-path",
    align: "#motion-path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    end: 0.878
    }
  }, 0);
  tl3.to(['#train-2'], 0.5,{ autoAlpha: 1 }, 0);
  tl3.to(['#train-2'], 0.5,{ rotation: '-=10' }, 13);
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
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
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
