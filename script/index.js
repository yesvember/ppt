gsap.registerPlugin(ScrollTrigger);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// main 
gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "30% top",
    end: "bottom center",
    scrub: 1,
  }
})
.fromTo(".main__text-inner", { yPercent: 0 }, { yPercent: 100, ease: "none" });


// intro scrolltrigger
gsap.fromTo('.intro__img-wrap > img', 
  { scale: 1.4 }, 
  { scale: 1,

    scrollTrigger: {
      trigger: "#intro",
      start: "center bottom",
      end: "200% bottom",
      scrub: 1
    }
  }
);

// work scrolltrigger
 gsap.fromTo('.work-intro-swiper img', 
   { scale: 1.4 }, 
   { scale: 1,

     scrollTrigger: {
       trigger: ".work__intro",
       start: "20% bottom",
       end: "200% bottom",
       scrub: 1
     }
   }
 );

gsap.fromTo('.work-deco', 
  {rotate : 360}, 
  {rotate:0,
    
    scrollTrigger: {
      trigger: ".work__intro",
      start: "20% bottom",
      end: "200% bottom",
      scrub: 1
    }
  }
);


// contact scrolltrigger
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top bottom",
      end: "50% bottom",
      scrub: 2,
    },
  })
  .fromTo(".contact__text__ani-01", { x: 400, opacity : 0}, { x: 0, opacity : 1 })
  .fromTo(".contact__text__ani-02", { x: -400, opacity : 0}, { x: 0, opacity : 1 }, "<");


 
// work intro swiper
 const swiperIntro = new Swiper(".work-intro-swiper", {
   direction: "horizontal",
   loop: true,
   slidesPerView: 1, 
   effect: "fade", 
   fadeEffect: {
     crossFade: true 
   },
   autoplay: {
     delay: 1000,
   },
 });

// web design swiper
const swiper1 = new Swiper(".swiper__01", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },

  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1200: { 
      slidesPerView: 3,
    },
  },
});

// web clone coding swiper
const swiper2 = new Swiper(".swiper__02", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },

  breakpoints: {
     0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});

// another design swiper
const swiper3 = new Swiper(".swiper__03", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});


