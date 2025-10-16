gsap.registerPlugin(ScrollTrigger);

// contact scrolltrigger
const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top bottom",
    end: "50% bottom",
    scrub: 1,
  }
});

contactTl
  .fromTo(".contact__text__ani-01", 
    { x: 400, opacity: 0 }, 
    { x: 0, opacity: 1, ease: "power2.out" }
  )
  .fromTo(".contact__text__ani-02", 
    { x: -400, opacity: 0 }, 
    { x: 0, opacity: 1, ease: "power2.out" },
    "<" // 동시에 실행
  );
 