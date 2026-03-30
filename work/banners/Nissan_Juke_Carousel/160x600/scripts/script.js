"use strict";

/*************************************************************************************************/
/* Custom variables - divs are automatically made into vars in vars.min.js ***********************/
/*************************************************************************************************/

// gsap.registerPlugin(MotionPathPlugin);

var tl = gsap.timeline(),
	buttonArray, button, disabledArray, disabledButton, clickthroughArray, clickthroughButton, type,
	i, j;

var bannerWidth = 160;
var bannerHeight = 600;

/*************************************************************************************************/
/* Banner initialisation, loading, event listening etc *******************************************/
/*************************************************************************************************/

function init() {
	createClipPaths();
	createTimeline();
	addEventListeners();
	
	(Enabler.isPageLoaded()) ? politeInit() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
}

function addEventListeners() {
	buttonArray = [container];
	for (i = 0; i < buttonArray.length; i++) {
		button = buttonArray[i];
		button.style.cursor = "pointer";
		button.addEventListener("mouseover", buttonHandler, false);
		button.addEventListener("mouseout", buttonHandler, false);
		button.addEventListener("click", buttonHandler, false);
	}

	disabledArray = [];
	for (i = 0; i < disabledArray.length; i++) {
		disabledButton = disabledArray[i];
		disabledButton.style.pointerEvents = "none";
	}
}

function politeInit() {
	console.log(":: starting polite load ::");

	setTimeout(function() {
		politeLoad([
			{url:"images/bg1.jpg", div:"frame1bg"},
			{url:"images/bg2.jpg", div:"frame2bg"},
			{url:"images/bg3.jpg", div:"frame3bg"},
			{url:"images/bg4.jpg", div:"frame4bg"},
			{url:"images/bg5.jpg", div:"frame5bg"},
			{url:"images/britlockup.png", div:"by"},
			{url:"images/britlockup.png", div:"brit"},
			{url:"images/logo.png", div:"logo"},
		],

		function() {
			console.log(":: all loads complete ::");
			gsap.delayedCall(0.2, function() { tl.play(); });
		});
	}, 1000);
}




/*************************************************************************************************/
/* Timeline & any other animation & logic ********************************************************/
/*************************************************************************************************/

function createTimeline() {


    tl  .call(function(paused) {

		})

		tl

		.set([frame1bg, frame2bg, frame3bg, frame4bg, frame5bg], {transformOrigin:"50% 50%"})
		.set([by, brit], {autoAlpha:0})

		.addLabel("start", 0)
    	.to(preloader, {duration:0.35, autoAlpha:0, ease:"quad.inOut", overwrite:false}, "start")
		.to(frame1bg, {duration:10, scale:1.1, ease:"linear"}, "start")


		.addLabel("frame1", 4)
		.to(myClip1.children, {duration: 0.5, x: -bannerWidth, ease: Power2.easeInOut, stagger:0.2, onUpdate: () => redrawClipPath(".clip-svg", "myClip1")}, "frame1")


		.addLabel("frame2", 8)
		.to(frame2bg, {duration:10, scale:1.1, ease:"linear"}, "frame2-=4")
		.to(myClip2.children, {duration: 0.5, x: -bannerWidth, ease: Power2.easeInOut, stagger:0.2, onUpdate: () => redrawClipPath(".clip-svg2", "myClip2")}, "frame2")

		
		.addLabel("frame3", 12)
		.to(frame3bg, {duration:10, scale:1.1, ease:"linear"}, "frame3-=4")
		.to(myClip3.children, {duration: 0.5, x: -bannerWidth, ease: Power2.easeInOut, stagger:0.2, onUpdate: () => redrawClipPath(".clip-svg3", "myClip3")}, "frame3")


		.addLabel("frame4", 15)
		.to(frame4bg, {duration:10, scale:1.1, ease:"linear"}, "frame4-=4")
		.to(myClip4.children, {duration: 0.5, x: -bannerWidth, ease: Power2.easeInOut, stagger:0.2, onUpdate: () => redrawClipPath(".clip-svg4", "myClip4")}, "frame4")


		.addLabel("frame5", 18)
		.to(frame5bg, {duration:10, scale:1.1, ease:"linear"}, "frame5-=4")
		.from(".copyLock", {duration:0.35, y:-33, ease:Quad.easeIn}, "frame5-=2")
		.set([by, brit], {autoAlpha:1, stagger:0.2}, "frame5-=1.65")
		.to(".copyLock", {duration:0.35, y:"+33", ease:Quad.easeIn}, "frame5-=1.1")
		.to(".copyLock", {duration:0.35, y:"+76", ease:Quad.easeIn}, "frame5")
		.from(cta, {duration:0.5, autoAlpha:0}, "frame5+=0.5")
		.call(function() {gsap.killTweensOf(frame5bg)}, null, "frame5")




		.pause();


		}


/*************************************************************************************************/
/* SVG onUpdates for safari ********************************************************************************/
/*************************************************************************************************/


function redrawClipPath(imgSelector, clipId) {
	var img = document.querySelector(imgSelector);
	if (!img) return;
	img.style.clipPath = "none";
	img.offsetWidth; // force reflow
	img.style.clipPath = `url(#${clipId})`;
	var frameNumber = parseInt(clipId.replace(/\D/g, ""), 10);
	console.log("frame " + frameNumber + " complete");
}


/*************************************************************************************************/
/* Create Clip Paths ********************************************************************************/
/*************************************************************************************************/


function createClipPaths() {

	// Number of clipPaths you want
  	var count = 5;

  	// Find the <defs> within the first svg
  	var defs = document.querySelector('svg defs');

    // base group to clone
    var base = document.getElementById('clipBase');

  	for (let i = 1; i <= count; i++) {
    // create a clipPath element
    var clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clip.setAttribute('id', `myClip${i}`);

    // clone base content and append
    var clone = base.cloneNode(true);
    // remove id on the clone to avoid duplicate ids inside the document
    clone.removeAttribute('id');

    // Append all children of clone to clipPath
    while (clone.firstChild) {
      clip.appendChild(clone.firstChild);
    }

    defs.appendChild(clip);
  }

   // Example: apply first clipPath to body element
   // document.querySelector('.some-element').style.clipPath = 'url(#myClip-1)';

   // Get all clipPaths currently in <defs>
   var allClipPaths = defs.querySelectorAll('clipPath');

   // Log the count
   console.log(`Number of clipPaths created: ${allClipPaths.length}`);

   // Log each clipPath ID
   console.log('ClipPath IDs:');
   allClipPaths.forEach(cp => console.log(`- ${cp.id}`));
}





/*************************************************************************************************/
/* Event handlers ********************************************************************************/
/*************************************************************************************************/

function buttonHandler($e) {
	button 	= $e.currentTarget;
	type	= $e.type;

	switch (button) {
		case container:
			if 		(type === "mouseover") 	{ 
				gsap.to(cta, {duration:0.3, background:"#a40229"})
			 }
			else if (type === "mouseout") 	{  
				gsap.to(cta, {duration:0.3, background:"#c3002f"})
			}
			else if (type === "click") 		{ Enabler.exit("Background Exit"); }
			break;
	}
}





/*************************************************************************************************/
/* Check page and Enabler has been loaded and initialised ****************************************/
/*************************************************************************************************/

function checkEnabler() {
	(Enabler.isInitialized()) ? enablerInitHandler() : Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}

function enablerInitHandler() {
	(Enabler.isVisible()) ? init() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
}

domready(function() {
	console.log(":: dom ready ::");
	if (elementScrape()) checkEnabler();
});