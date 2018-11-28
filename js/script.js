let teamName = document.querySelector(".head__title"),
  commingSoon = document.querySelector(".head__text"),
  tl = new TimelineMax();

tl.from(teamName, 2, {
  autoAlpha: 0,
  x: "-1000px",
  ease: Elastic.easeOut.config(1, 0.3)
});

tl.from(".head__text", 1, {
  autoAlpha: 0,
  scale: 0.9,
  ease: RoughEase.ease.config({
    template: Power0.easeNone,
    strength: 1,
    points: 20,
    taper: "none",
    randomize: true,
    clamp: false
  }),
  repeatDelay: 0.3,
  repeat: -1
});
