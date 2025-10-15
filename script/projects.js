gsap.registerPlugin(ScrollTrigger);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});


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


 