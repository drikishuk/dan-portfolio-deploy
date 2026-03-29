// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power4.easeOut;

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

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.set(["#bg_holder"], { transformOrigin: "50% 50%", scale: 1 });
  tl.set(
    [
      "#txt1",
      "#txt2",
      "#txt3",
      "#txt4",
      "#txt5",
      "#txt6",
      "#baseline",
      "#img1",
      "#img2",
      "#img3",
      "#img4",
      "#cta",
    ],
    { autoAlpha: 0 }
  );

  tl.to(["#txt1"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 0);

  tl.to(["#txt1"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 3);

  tl.to(["#img1"], 0.2, { autoAlpha: 1, ease: Power1.easeOut }, 3.5);

  tl.to(["#img1"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 6);

  tl.to(["#txt2"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 6.5);

  tl.to(["#txt2"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 9);

  tl.to(["#img2"], 0.2, { autoAlpha: 1, ease: Power1.easeOut }, 9.5);

  tl.to(["#img2"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 12);

  tl.to(["#txt3"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 12.5);

  tl.to(["#txt3"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 15);

  tl.to(["#img3"], 0.2, { autoAlpha: 1, ease: Power1.easeOut }, 15.5);

  tl.to(["#img3"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 18);

  tl.to(["#txt4"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 18.5);

  tl.to(["#txt4"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 21.5);

  tl.to(["#img4"], 0.2, { autoAlpha: 1, ease: Power1.easeOut }, 22);

  tl.to(["#img4"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 24.5);

  tl.to(
    ["#txt5", "#baseline", "#cta"],
    0.5,
    { autoAlpha: 1, ease: Power1.easeOut },
    25
  );

  tl.to(
    ["#txt5", "#baseline", "#cta"],
    0.5,
    { autoAlpha: 0, ease: Power1.easeOut },
    28
  );

  tl.to(["#txt6"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 28.5);

  tl.to(["#txt6"], 0.5, { autoAlpha: 0, ease: Power1.easeOut }, 48.5);

  tl.to(
    ["#txt5", "#baseline", "#cta"],
    0.5,
    { autoAlpha: 1, ease: Power1.easeOut },
    49
  );
}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
