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

  setRollover();
}

function animate() {
  tl1.set(['#h1', '#white-stroke'],{ autoAlpha: 0 });
  tl1.set(['#txt1a', '#txt1b', '#txt1c', '#txt1d', '#txt1e'],{ autoAlpha: 0, y: "+=10" });
  tl1.set(['#txt2a', '#txt2b', '#txt2c', '#txt2d'],{ autoAlpha: 0, y: "+=10" });
  tl1.set(['#txt3a', '#txt3b', '#txt3c', '#txt3d', '#txt3e', '#txt3f', '#txt3g', '#txt3h'],{ autoAlpha: 0, y: "+=10" });
  tl1.set(['#txt4a', '#txt4b', '#txt4c'],{ autoAlpha: 0, y: "+=10" });
  tl1.set(['#txt5a', '#txt5b', '#txt5c'],{ autoAlpha: 0, y: "+=10" });

  tl1.set('#h1',{ scale: 10 });

  tl1.to(['#h1'], 0.5,{ autoAlpha: 1, scale: 1, rotationY: 0.1, ease: "power4.out" }, 0);
  tl1.to('#txt1a', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt1b', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt1c', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt1d', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt1e', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");

  tl1.to(['#txt1a', '#txt1b', '#txt1c', '#txt1d', '#txt1e'], 0.33,{ autoAlpha: 0, y: '-=5' }, "+=1.3");
  tl1.add(color2Animation, "+=0");
  tl1.to(['#h1'], 0.5,{ autoAlpha: 0 }, "+=0.8");


  tl1.to('#txt2a', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.5");
  tl1.to('#txt2b', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt2c', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt2d', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");    

  tl1.to(['#txt2a', '#txt2b', '#txt2c', '#txt2d'], 0.33,{ autoAlpha: 0, y: '-=5' }, "+=1.3");
  tl1.add(color3Animation, "+=0");
  tl1.to(['#h2a', '#h2b'], 0.5,{ autoAlpha: 0 }, "+=0.8");


  tl1.to('#txt3a', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3b', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3c', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3d', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3e', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3f', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3g', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt3h', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");

  tl1.to(['#h3a', '#h3b'], 0.33,{ autoAlpha: 0, y: '-=5' }, "+=1.3");
  tl1.add(color4Animation, "+=0");
  tl1.to(['#txt3a', '#txt3b', '#txt3c', '#txt3d', '#txt3e', '#txt3f', '#txt3g', '#txt3h'], 0.33,{ autoAlpha: 0, y: '-=5' }, "-=0.165");
  tl1.to(['#white-stroke'], 0.5,{ autoAlpha: 1 }, "+=0.5");


  tl1.to('#txt4a', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.5");
  tl1.to('#txt4b', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt4c', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");

  tl1.to(['#txt4a', '#txt4b', '#txt4c'], 0.33,{ autoAlpha: 0, y: '-=5' }, "+=1.3");

  tl1.to(['#h2a', '#h2b'], 0.5, { autoAlpha: 1 }, "+=0")
  tl1.to('#txt5a', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt5b', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
  tl1.to('#txt5c', 0.34,{ autoAlpha: 1, y: '-=10' }, "-=0.165");
}

function color2Animation () {
  const tl2 = new TimelineMax();

  tl2.to('#color2a', 1.25,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0);
  tl2.to('#color2b', 1,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.07);
  tl2.to('#color2c', 0.75,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.14);
  tl2.to('#color2d', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.21);
  tl2.to('#color2e', 1.33,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.28);
  tl2.to('#color2f', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.35);
  tl2.to('#h2a', 0.5,{ width: '+=150', x: '+=0', ease:Linear.easeNone }, 0.5);
  tl2.to('#color2', 0.75,{ x: '+=728', ease:Linear.easeNone }, 0.42);
  tl2.to('#h2b', 0.5,{ width: '+=150', x: '+=0', ease:Linear.easeNone }, 0.75);
}

function color3Animation () {
  const tl3 = new TimelineMax();

  tl3.to('#color3a', 1.25,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0);
  tl3.to('#color3b', 1,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.07);
  tl3.to('#color3c', 0.75,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.14);
  tl3.to('#color3d', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.21);
  tl3.to('#color3e', 1.33,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.28);
  tl3.to('#color3f', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.35);
  tl3.to('#h3a', 0.5,{ width: '+=150', x: '+=0', ease:Linear.easeNone }, 0.5);
  tl3.to('#color3', 0.75,{ x: '+=728', ease:Linear.easeNone }, 0.42);
  tl3.to('#h3b', 0.5,{ width: '+=150', x: '+=0', ease:Linear.easeNone }, 0.75);
}

function color4Animation () {
  const tl4 = new TimelineMax();

  tl4.to('#color4a', 0.75,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0);
  tl4.to('#color4b', 1,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.07);
  tl4.to('#color4c', 0.75,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.14);
  tl4.to('#color4d', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.21);
  tl4.to('#color4e', 1.33,{ width: '+=728', x: '+=0', ease:Linear.easeNone }, 0.28);
  tl4.to('#color4f', 1,{ width: '+=728', x: '+=20', ease:Linear.easeNone }, 0.35);
  tl4.to('#color4', 0.75,{ x: '+=728', ease:Linear.easeNone }, 0.42);
}

// CTA grow on hover

function setRollover() {
  document.getElementById('bgExit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('bgExit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.05, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
