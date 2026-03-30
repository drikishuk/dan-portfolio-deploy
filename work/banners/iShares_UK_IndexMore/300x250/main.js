// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power2.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

//  Loop count
var loops = 0

// Init tricggered by onLoad in Body tag
function init() {

  termsHolderHeight = document.getElementById("text_wrapper").offsetHeight;

  termsHeight = document.getElementById("terms_text").offsetHeight;

  termsCurrentPosition = document.getElementById("terms_text").offsetTop;

  termsMaxYPosition = termsHeight - termsHolderHeight;

  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime, registerPlugin: CustomEase });
  tl2 = new TimelineMax();

  addListeners();
  setTermsReveal();
  animate();
  setRollover();

}


function animate() {
  const textEase = CustomEase.create("custom", "M0,0 C0,0 0.019,0.111 0.032,0.232 0.042,0.328 0.052,0.359 0.066,0.456 0.08,0.554 0.118,0.598 0.138,0.628 0.158,0.658 0.291,0.732 0.34,0.77 0.379,0.8 0.446,0.835 0.49,0.86 0.53,0.882 0.554,0.89 0.628,0.914 0.68,0.931 0.696,0.932 0.794,0.954 0.882,0.973 1,1 1,1 ");

  //timeline 1
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true })
    .set(["#cta"], { force3D: true, z: .001, rotation: .001 })
    .set("#text2", { x: 200 })
    .set(["#text2", "#text3", "#cta", "#terms", "#logo2", "#capital_2", "#info", "#close", "#etf"], { autoAlpha: 0})

  tl.to(["#text1"], 5,{y: -700, ease: textEase}, 0.5)
    .to(["#capital_1"], 0.4, { autoAlpha: 0 }, "-=0.5")
    .to(["#text2"], 0.4,{ autoAlpha: 1, x: 0,  ease: Power1.easeInOut }, 1.5)
    .to(["#text1", "#text2", "#logo1"], 0.5,{autoAlpha: 0, ease: Power1.easeOut}, 5)
    .to(["#text3", "#logo2", "#cta", "#capital_2", "#etf"], 0.4,{ autoAlpha: 1, ease: Power1.easeInOut }, ">")

    .to(["#text3", "#etf"], 0.4,{ autoAlpha: 0, ease: Power1.easeInOut }, "+=1.5")
    .to(["#terms"], 0.4, { autoAlpha: 1, ease: Power1.easeOut }, ">")
    .to(["#terms"], 0.4,{ autoAlpha: 0, ease: Power1.easeInOut }, "+=1.5")
    .to(["#text3", "#info", "#etf"], 0.4, { autoAlpha: 1, ease: Power1.easeOut }, "+=0.4")
    .to(["#terms"], 0.1,{ y: 250, ease: Power1.easeInOut }, "<")
    .to(["#terms", "#close"], 0.1,{ autoAlpha: 1, ease: Power1.easeInOut }, "+=0.02")

}


// CTA grow on hover

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', default_over, false);
  document.getElementById('default_exit').addEventListener('mouseout', default_out, false);
  document.getElementById('cta_terms').addEventListener('mouseover', default_over, false);
  document.getElementById('cta_terms').addEventListener('mouseout', default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta"], .3, { scale: 1.05, ease: easing, delay: 0 });
  TweenMax.to(["#cta_terms"], .3, { scale: 1.05, ease: easing, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta"], .3, { scale: 1, ease: easing, delay: 0 });
  TweenMax.to(["#cta_terms"], .3, { scale: 1, ease: easing, delay: 0 });
}

function setTermsReveal() {
  document.getElementById('info').addEventListener('click', revealTerms, false);
  document.getElementById('close').addEventListener('click', hideTerms, false);
}

function revealTerms(event) {
  TweenMax.to(["#terms"], 0.6, { y: 0, ease: easing, delay: 0 });
}

function hideTerms(event) {
  TweenMax.to(["#terms"], 0.6, { y: 250, ease: easing, delay: 0 });
}

function addListeners() {
  document.getElementById("up_btn").addEventListener('click', clickUp);
  document.getElementById("up_btn").addEventListener('mouseover', rolloverUp);
  document.getElementById("up_btn").addEventListener('mouseout', rolloutUp);
  document.getElementById("up_btn").addEventListener('touchstart', rolloverUp);
  document.getElementById("up_btn").addEventListener('touchend', rolloutUp);
  document.getElementById("down_btn").addEventListener('click', clickDown);
  document.getElementById("down_btn").addEventListener('mouseover', rolloverDown);
  document.getElementById("down_btn").addEventListener('mouseout', rolloutDown);
  document.getElementById("down_btn").addEventListener('touchstart', rolloverDown);
  document.getElementById("down_btn").addEventListener('touchend', rolloutDown);
}

function rolloverUp(ev) {
  ev.preventDefault();
  TweenMax.set("#up", { y: -5 });
  scrollInterval = setInterval(scrollUp, 500);
  console.log("upbtn roll over");
}

function rolloutUp(ev) {
  ev.preventDefault();
  TweenMax.set("#up", { y: 0 });
  clearInterval(scrollInterval);
  console.log("upbtn roll out");
}

function clickUp() {}

function rolloverDown(ev) {
  ev.preventDefault();
  TweenMax.set("#down", { y: 5 });
  scrollInterval = setInterval(scrollDown, 500);
  console.log("Downbtn roll over");
}

function rolloutDown(ev) {
  ev.preventDefault();
  TweenMax.set("#down", { y: 0 });
  clearInterval(scrollInterval);

  console.log("Downbtn roll out");
}

function clickDown() {}

function scrollDown() {
  var currentYPos = gsap.getProperty("#terms_text", "y");
  var termsMaxYPositionNegative = -Math.abs(termsMaxYPosition);
  console.log('currentYPos = ' + currentYPos)
  console.log('termsMaxYPositionNegative = ' + termsMaxYPositionNegative)
  if (currentYPos >= termsMaxYPositionNegative) {
      TweenMax.to("#terms_text", .2, { y: "-=40" });
  } else {
      TweenMax.to("#terms_text", .2, { y: termsMaxYPositionNegative - 30 });
      clearInterval(scrollInterval);
  }
}

function scrollUp() {
  var currentYPos = gsap.getProperty("#terms_text", "y");
  if (currentYPos <= 0) {
      TweenMax.to("#terms_text", .2, { y: "+=40" });
  } else {
      TweenMax.to("#terms_text", .2, { y: 0 });
      clearInterval(scrollInterval);
  }
}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
