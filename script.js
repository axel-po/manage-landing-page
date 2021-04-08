function menu() {
  const btn = document.querySelector(".burger");
  const menu = document.querySelector(".nav-links");
  const li = document.querySelectorAll(".nav-links li");
  const imgBurger = document.querySelector(".burger img");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  li.forEach((li) => {
    li.addEventListener("click", closeMenu);
  });

  function openMenu() {
    menu.classList.add("active");
    setTimeout(() => {
      imgBurger.src = "images/icon-close.svg";
    }, 400);
  }

  function closeMenu() {
    menu.classList.remove("active");
    setTimeout(() => {
      imgBurger.src = "images/icon-hamburger.svg";
    }, 400);
  }
}

menu();

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
