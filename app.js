const tl = gsap.timeline({
  defautlt: { duration: 1.75, ease: Bounce.easeOut },
});

tl.fromTo(
  "img", // 1st parameter: target elements (CSS selector or DOM element)
  { opacity: 0, rotate: "-45deg" }, // 2nd parameter: starting styles
  { opacity: 1, rotate: "0deg" }, // 3rd parameter: ending styles
);

tl.fromTo(".chah", { opacity: 0.1 }, { opacity: 1 })

