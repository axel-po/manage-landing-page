$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  center: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    740: {
      items: 1.5,
    },
    955: {
      items: 2,
    },
    1200: {
      items: 2.5,
    },
  },
});
