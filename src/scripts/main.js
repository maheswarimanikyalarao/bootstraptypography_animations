import gsap from 'gsap';

// Hero Text Animation
gsap.from(".animated-text", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3.out"
});

// Geometric Circle Animation
gsap.to(".geometric-circle", {
  x: 300,
  y: 200,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Parallax Effect on Scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  gsap.to(".hero", {
    backgroundPositionY: scrollPosition * 0.5,
    ease: "none"
  });
});

// Geometric Square Rotation
gsap.to(".geometric-square", {
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: "linear"
});