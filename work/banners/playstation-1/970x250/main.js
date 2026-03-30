
// init function triggered by onLoad in body tag
function init() {

  /* Main Banner Animation Here */
  var  tl_banner = gsap.timeline();
  var  tl_banner2 = gsap.timeline();

  /* Clear #brand_cta_outer from timeline if not using Brand CTA*/

   tl_banner
   .set("#brand_cta_outer", { opacity: 0 })
     .to("#main",{ duration: .5, opacity: 1 }, 1)
     .to("#brand_cta_outer",{ duration: .5, opacity: 1 }, 2)

      tl_banner2.set('.hidden', { autoAlpha: 0 });
    
      
      tl_banner2.to(['#game-container', '#tag-container'], 0.5,{ autoAlpha: 1 }, 2);

  
      tl_banner2.to(['#game-1', '#tag-1'], 0,{ zIndex: 12 }, '+=0')
      tl_banner2.to(['#game-4', '#tag-4'], 0,{ zIndex: 11 }, '<')
      tl_banner2.to(['#game-7', '#tag-7'], 0,{ zIndex: 10 }, '<')

      tl_banner2.to(['#game-2', '#tag-2'], 0,{ zIndex: 31 }, '<')
      tl_banner2.to(['#game-5', '#tag-5'], 0,{ zIndex: 30 }, '<')

      tl_banner2.to(['#game-3', '#tag-3'], 0,{ zIndex: 21 }, '<')
      tl_banner2.to(['#game-6', '#tag-6'], 0,{ zIndex: 20 }, '<')

      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, 2.5)
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.45,{ x: '+=272', ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.35,{ scale: 1, ease: "power2.inOut" }, '<')

      tl_banner2.to(['#game-1', '#tag-1'], 0,{autoAlpha: 0 }, '-=0.25')
    
    
      tl_banner2.to(['#game-1', '#tag-1'], 0,{ zIndex: 22 }, '+=0')
      tl_banner2.to(['#game-4', '#tag-4'], 0,{ zIndex: 21 }, '<')
      tl_banner2.to(['#game-7', '#tag-7'], 0,{ zIndex: 20 }, '<')

      tl_banner2.to(['#game-2', '#tag-2'], 0,{ zIndex: 11 }, '<')
      tl_banner2.to(['#game-5', '#tag-5'], 0,{ zIndex: 10 }, '<')

      tl_banner2.to(['#game-3', '#tag-3'], 0,{ zIndex: 31 }, '<')
      tl_banner2.to(['#game-6', '#tag-6'], 0,{ zIndex: 30 }, '<')

      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '+=0.9')
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.45,{ x: '+=272', ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.35,{ scale: 1, ease: "power2.inOut" }, '<')

      tl_banner2.to(['#game-2', '#tag-2'], 0,{autoAlpha: 0 }, '-=0.25')


      tl_banner2.to(['#game-1', '#tag-1'], 0,{ zIndex: 32 }, '+=0')
      tl_banner2.to(['#game-4', '#tag-4'], 0,{ zIndex: 31 }, '<')
      tl_banner2.to(['#game-7', '#tag-7'], 0,{ zIndex: 30 }, '<')

      tl_banner2.to(['#game-2', '#tag-2'], 0,{ zIndex: 21 }, '<')
      tl_banner2.to(['#game-5', '#tag-5'], 0,{ zIndex: 20 }, '<')

      tl_banner2.to(['#game-3', '#tag-3'], 0,{ zIndex: 11 }, '<')
      tl_banner2.to(['#game-6', '#tag-6'], 0,{ zIndex: 10 }, '<')

      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '+=0.9')
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.45,{ x: '+=272', ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.35,{ scale: 1, ease: "power2.inOut" }, '<')

      tl_banner2.to(['#game-3', '#tag-3'], 0,{autoAlpha: 0 }, '-=0.25')


      tl_banner2.to(['#game-1', '#tag-1'], 0,{ zIndex: 12 }, '+=0')
      tl_banner2.to(['#game-4', '#tag-4'], 0,{ zIndex: 11 }, '<')
      tl_banner2.to(['#game-7', '#tag-7'], 0,{ zIndex: 10 }, '<')

      tl_banner2.to(['#game-2', '#tag-2'], 0,{ zIndex: 31 }, '<')
      tl_banner2.to(['#game-5', '#tag-5'], 0,{ zIndex: 30 }, '<')

      tl_banner2.to(['#game-3', '#tag-3'], 0,{ zIndex: 21 }, '<')
      tl_banner2.to(['#game-6', '#tag-6'], 0,{ zIndex: 20 }, '<')

      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '+=0.9')
      tl_banner2.to(['#game-1', '#tag-1', '#game-4', '#tag-4', '#game-7', '#tag-7'], 0.45,{ x: '+=272', ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-2', '#tag-2', '#game-5', '#tag-5'], 0.35,{ scale: 0.85, ease: "power2.inOut" }, '<')
    
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.45,{ x: '-=136', ease: "power2.inOut" }, '<')
      tl_banner2.to(['#game-3', '#tag-3', '#game-6', '#tag-6'], 0.35,{ scale: 1, ease: "power2.inOut" }, '<')
  
  // Go to end of timeline on click
  default_exit.addEventListener("click", function () {
     tl_banner2.progress(1).pause();
  });

}
