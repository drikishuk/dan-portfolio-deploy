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
  tl1.set(['#cta'], { force3D: false });
 
  tl1.to(['#copy1', '#cta'], 0.5,{ autoAlpha: 1 }, 0.5);
  tl1.to(['#copy1', '#image1'], 0.5,{ autoAlpha: 0 }, '+=2');
  tl1.to('#copy2', 0.5,{ autoAlpha: 1 }, '+=0.5');
  
  tl1.to(['#copy2', '#image2'], 0.5,{ autoAlpha: 0 }, '+=2');
  tl1.to('#copy3', 0.5,{ autoAlpha: 1 }, '+=0.5');
  
  tl1.to(['#copy3', '#image3'], 0.5,{ autoAlpha: 0 }, '+=2');
  tl1.to('#copy4', 0.5,{ autoAlpha: 1 }, '+=0.5');
  
  tl1.to(['#copy4', '#image4'], 0.5,{ autoAlpha: 0 }, '+=2');
  tl1.to('#copy5', 0.5,{ autoAlpha: 1 }, '+=0.5');
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
