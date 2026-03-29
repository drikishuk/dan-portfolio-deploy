//color key
// green - tree- '#30695A' - cta - '#224B45;'
// burgundy - teddy - '#721953' - cta '#721953'
// red - bauble - '#7E1749' - cta '#662049'

//set style & product

const myProduct = 'apple_iphone';
const myTheme = 'bauble';


function setContent() {

  //wrap in promise to ensure banner doesn't continue until all content is injected
  return new Promise((resolve, reject) => {

    //text for banner
    const manifest = {
      "bannerData": {
        "headline1": ["Something", "special for", "photography lovers",],
        "headline2": ["iPhone 14",],
        "headline3": null,
        "headline4": ["2 year guarantee", "included*"],
        "terms": ["", "*T&Cs apply"],
        "price": "From £849"
      }
    }

    // set background Map
    const themeMap = new Map([
      ['tree', ['./images/tree/tree.svg', './images/tree/treeTextImg.svg', '#30695A', '#224B45']],
      ['bauble', ['./images/bauble/bauble.svg', './images/bauble/baubleTextImg.svg', '#7E1749', '#662049']],
      ['teddy', ['./images/teddy/teddy.svg', './images/teddy/teddyTextImg.svg', '#721953', '#721953']]
    ]);

    // set product Map
    const productMap = new Map([
      ['tv', './images/products/tv.png'],
      ['genius', './images/products/genius.png'],
      ['estee_gift', './images/products/estee_gift.png'],
      ['estee_serum', './images/products/estee_serum.png'],
      ['apple_watch', './images/products/apple_watch.png'],
      ['apple_ipad', './images/products/apple_ipad.png'],
      ['apple_iphone', './images/products/apple_iphone.png'],
    ]);

    // set variables for html elements

    //text
    const text1 = document.getElementById('copy1');
    const text2 = document.getElementById('copy2');
    const text3 = document.getElementById('copy3');
    const text4 = document.getElementById('copy4');
    const text5 = document.getElementById('copy5');
    const price = document.getElementById('price');
    const terms1 = document.getElementById('terms1');
    const terms2 = document.getElementById('terms2');

    //images
    const product = document.getElementById('product')
    const backgroundImage = document.getElementById('bkg')
    const textImage = document.getElementById('text-img')

    //theme

    const main = document.getElementById('main')
    const background = document.getElementById('background')
    const ctaText = document.getElementById('shopNow')

    // set html elements with dynamic content

    //text
    for(const line of manifest.bannerData.headline1) {
      text1.innerHTML += `<span class="gradient-text">${line}</span><br/>`
    }

    if(manifest.bannerData.headline2) {
      for(const line of manifest.bannerData.headline2) {
        text2.innerHTML += `<span class="gradient-text">${line}</span><br/>`
      }
    }

    if(manifest.bannerData.headline3) {
      for(const line of manifest.bannerData.headline3) {
        text3.innerHTML += `<span class="gradient-text">${line}</span><br/>`
      }
    }

    if(manifest.bannerData.headline4) {
      for(const line of manifest.bannerData.headline4) {
        text4.innerHTML += `<span class="gradient-text">${line}</span><br/>`
      }
    }

    if(manifest.bannerData.headline5) {
      for(const line of manifest.bannerData.headline5) {
        text5.innerHTML += `<span class="gradient-text">${line}</span><br/>`
      }
    }

    if(manifest.bannerData.price) {
      price.innerHTML += `<span class="gradient-text">${manifest.bannerData.price}</span>`
    }

    if(manifest.bannerData.terms) {
      terms1.innerHTML += `<span>${manifest.bannerData.terms[0]}</span>`
    }

    if(manifest.bannerData.terms) {
      terms2.innerHTML += `<span>${manifest.bannerData.terms[1]}</span>`
    }

    //images
    product.src = productMap.get(myProduct)
    backgroundImage.src = themeMap.get(myTheme)[0];
    backgroundImage.classList.add(`${myTheme}Background`)
    textImage.src = themeMap.get(myTheme)[1];
    textImage.classList.add(`${myTheme}TextImage`)

    const myColor = themeMap.get(myTheme)[2];
    const myCtaColor = themeMap.get(myTheme)[3];

    //theme
    main.style.backgroundColor = myColor;
    background.style.backgroundColor = myColor;

    //set color of cta text
    ctaText.innerHTML = `
      .st0{opacity:0.999;}
      .st1{fill:url(#button_00000150798696524482406350000011221282384590631042_);}
      .st2{enable-background:new    ;}
      .st3{fill:${myCtaColor};}`

    //resolve promise
    resolve();

  })


}

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
async function init() {
  // Set Banner duration timer
  startTime = new Date();

  await setContent();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  addSparkles('sparkles1');
  addSparkles('sparkles2');
  var delayRollover = setTimeout(setRollover, 9000);
  animate();
}

function animate() {

  tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: true, rotation: .001 });
  tl1.set(['#copy1', '#copy2', '#text-img', '#cta', '#logo', '#product'], { autoAlpha: 0 });
  tl1.set(['#product'], { y: '+=10' });

  tl1.to(['#logo-1'], 0.5,{ autoAlpha: 1, x: '+=0', width: '+=0.5', rotationY: 0.1 }, 0.5);
  tl1.to(['#logo-2'], 0.5,{ autoAlpha: 1, x: '+=2.5', width: '+=1', rotationY: 0.1 }, 1);
  tl1.to(['#logo-3'], 0.5,{ autoAlpha: 1, x: '+=5', width: '+=1.75', rotationY: 0.1 }, 0.75);
  tl1.to(['#logo-4'], 0.5,{ autoAlpha: 1, x: '+=7.75', width: '+=12.8', rotationY: 0.1 }, 0.5);

  tl1.to(['#logo'], 1,{ autoAlpha: 1 }, '-=0.5');

  tl1.to(['#copy1', '#text-img'], 0.5,{ autoAlpha: 1 }, '-=1');

  tl2.staggerTo('.sparkle', 1,{ scale: 1, opacity: 1, y: '+=25' }, 0.125, 0.5);
  tl2.staggerTo('.sparkle', 1,{ opacity: 0, y: '+=25' }, 0.125, 1);

  tl2.staggerTo('.sparkle2', 1,{ scale: 1, opacity: 1, y: '+=25' }, 0.125, 0.75);
  tl2.staggerTo('.sparkle2', 1,{ opacity: 0, y: '+=25' }, 0.125, 1.25);

  tl1.to(['#product'], 0.5,{ autoAlpha: 1, y: '-=10', scale: 1 }, '+=0');
  tl1.to(['#copy1', '#text-img', '#sparkles1', '#sparkles2'], 0.5,{ autoAlpha: 0 }, '+=2');

  tl1.to(['#copy2',], 0.5,{ autoAlpha: 1 }, '<');
  tl1.to(['#endframe', '#copy4', '#terms2'], 0.5,{ autoAlpha: 1 }, '+=0');
  tl1.staggerTo(['#price', '#cta'], 1,{ autoAlpha: 1 }, 0.5, '+=0');

  tl1.to(['#cta-shine'], 1,{ x: '+=500' }, '+=0');
  tl1.to(['#cta-shine'], 0,{ opacity: 0 }, '+=0.5');
  tl1.to(['#cta-shine'], 0,{ opacity: 1, x: '-=500' }, '-=0');
  tl1.to(['#cta-shine'], 1,{ x: '+=500' }, '+=0.5');


  tl2.to(['#bkg'], 6,{ scale: 1, rotation: .001, ease: "none" }, 0);



  // tl2.to('#bkg', 15,{scale: 1, y:0, rotation: 0.1}, 0);
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
  TweenMax.to(["#cta-shine-container"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta-shine-container"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addSparkles(div) {
  const sparkleCount = 99;
  for (var i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('img');
    sparkle.src = 'images/sparkle.png';
    sparkle.classList.add('sparkle');
    sparkle.style.top = randomNum(-5, 95) +'px';
    sparkle.style.left = randomNum(5, 145) +'px';
    sparkle.style.width = randomNum(0.5, 14) +'px';
    const sparkles = document.getElementById(div);
    sparkles.appendChild(sparkle);
  }
}
