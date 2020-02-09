window.onscroll = function() {
  menuTop();
};

const menuTop = () => {
  navbarPetit = document.getElementById("navbarPetit");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbarPetit.style.background = "white";
    navbarPetit.style.transition = ".3s";
  } else {
    navbarPetit.style.background = "transparent";
  }
};

$(".owl-one").owlCarousel({
  margin: 10,
  nav: true,
  center: true,
  loop: true,
  autoplay: true,
  autoplayTimeout:4000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(".owl-two").owlCarousel({
  margin: 10,
  loop: true,
  nav: true,
  autoplay:true,
  autoplayTimeout: 5000, 
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
