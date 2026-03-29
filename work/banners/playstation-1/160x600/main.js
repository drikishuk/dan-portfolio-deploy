
// init function triggered by onLoad in body tag
function init() {

  /* Main Banner Animation Here */
  var tl_banner = gsap.timeline();
  var tl_banner2 = gsap.timeline();

  /* Clear #brand_cta_outer from timeline if not using Brand CTA*/
  
  tl_banner
  .set("#brand_cta_outer", { opacity: 0 })
    .to("#main",{ duration: .5, opacity: 1 }, 1)
    .to("#brand_cta_outer",{ duration: .5, opacity: 1 }, 2)

  tl_banner2.set(['#cta'], { force3D: false });
  tl_banner2.set('.hidden', { autoAlpha: 0 });
  
  tl_banner2.to(['#game-container', '#tag-container'], 0.5,{ autoAlpha: 1 }, 2);

  
  tl_banner2.to(['#game-1', '#tag-1'], 0.35,{ scale: 0.8, ease: "power2.inOut" }, 2.5)
  tl_banner2.to(['#game-1', '#tag-1'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '-=0.35')
  
  tl_banner2.to(['#game-2', '#tag-2'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '<')
  tl_banner2.to(['#game-2', '#tag-2'], 0.35,{ scale: 1, ease: "power2.inOut" }, '-=0.35')
  

  
  tl_banner2.to(['#game-2', '#tag-2'], 0.35,{ scale: 0.8, ease: "power2.inOut" }, '+=0.9')
  tl_banner2.to(['#game-2', '#tag-2'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '-=0.35')
  
  tl_banner2.to(['#game-3', '#tag-3'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '<')
  tl_banner2.to(['#game-3', '#tag-3'], 0.35,{ scale: 1, ease: "power2.inOut" }, '-=0.35')
  

  
  tl_banner2.to(['#game-3', '#tag-3'], 0.35,{ scale: 0.8, ease: "power2.inOut" }, '+=0.9')
  tl_banner2.to(['#game-3', '#tag-3'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '-=0.35')
  
  tl_banner2.to(['#game-4', '#tag-4'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '<')
  tl_banner2.to(['#game-4', '#tag-4'], 0.35,{ scale: 1, ease: "power2.inOut" }, '-=0.35')
  

  
  tl_banner2.to(['#game-4', '#tag-4'], 0.35,{ scale: 0.8, ease: "power2.inOut" }, '+=0.9')
  tl_banner2.to(['#game-4', '#tag-4'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '-=0.35')
  
  tl_banner2.to(['#game-5', '#tag-5'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '<')
  tl_banner2.to(['#game-5', '#tag-5'], 0.35,{ scale: 1, ease: "power2.inOut" }, '-=0.35')
  

  
  tl_banner2.to(['#game-5', '#tag-5'], 0.35,{ scale: 0.8, ease: "power2.inOut" }, '+=0.9')
  tl_banner2.to(['#game-5', '#tag-5'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '-=0.35')
  
  tl_banner2.to(['#game-6', '#tag-6'], 0.45,{ x: '-=160', ease: "power2.inOut" }, '<')
  tl_banner2.to(['#game-6', '#tag-6'], 0.35,{ scale: 1, ease: "power2.inOut" }, '-=0.35')
    

  tl_banner2.to(['#text-2'], 0.5,{ autoAlpha: 0 }, '+=0.5');
  tl_banner2.to(['#tabs-text', '#tabs', '#features'], 0.5,{ autoAlpha: 1 }, '+=0.5');

  // Go to end of timeline on click
  default_exit.addEventListener("click", function () {
    tl_banner2.progress(1).pause();
  });

}
