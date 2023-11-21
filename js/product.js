var lazyLoadInstance = new LazyLoad({});

// ==================== Second Section Carousel =========================

$(document).ready(function () {
  var owl = $(".first-carousel .owl-carousel");

  owl.owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  function setAnimation(_elem, _InOut) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each(function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType);
      });
    });
  }

  owl.on('change.owl.carousel', function (event) {
    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-out]");
    setAnimation($elemsToanim, 'out');
  });

  var round = 0;
  owl.on('changed.owl.carousel', function (event) {

    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-in]");

    setAnimation($elemsToanim, 'in');
  })

  owl.on('translated.owl.carousel', function (event) {

    if (event.item.index == (event.page.count - 1)) {
      if (round < 1) {
        round++
      } else {
        owl.trigger('stop.owl.autoplay');
        var owlData = owl.data('owl.carousel');
        owlData.settings.autoplay = false;
        owlData.options.autoplay = false;
        owl.trigger('refresh.owl.carousel');
      }
    }
  });

});

// ==================== Eighth Section Carousel =========================

$(function () {
  var owl = $(".tab-container .owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// ================== On Clicking Anchor Tag Scroll to the Section =====================

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// =================== On Click video JS ==========================

const video = document.querySelector("#sixth-section video");
const playBtn = document.querySelector(".play-btn");
const closeVideo = document.querySelector(".close-video");

playBtn.addEventListener("click", () => {
  video.classList.remove("d-none");
  playBtn.classList.add("d-none");
  playBtn.classList.remove("fadeInUpBig");
  closeVideo.style.transform = "scale(1)"
});

closeVideo.addEventListener("click", () => {
  video.classList.add("d-none");
  playBtn.classList.remove("d-none");
  closeVideo.style.transform = "scale(0)";
});

// ======= Adding Fade Right Effect on selecting the tab on carousel ========

const TabBtn = document.querySelectorAll(".tab-button");
const Tabs = document.querySelectorAll(".tab-pane");

TabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    Tabs.forEach((tab) => {
      if (!tab.classList.contains("active")) {
        tab.classList.remove("fadeinright");
      } else tab.classList.add("fadeinright");
    });
  });
});

// ================= Sidebar JS =========================

const menu = document.querySelector("#menu");
const sideBar = document.querySelector(".sidebar");
const close = document.querySelector("#close");

menu.addEventListener("click", () => {
  sideBar.style.left = 0;
});

close.addEventListener("click", () => {
  sideBar.style.left = "-100%";
});

// ================== Fade Out Item ====================

window.addEventListener("scroll", () => {
  const tenthSect = document.querySelector("#tenth-section");
  const RemoveEffect = document.querySelectorAll(".remove-effect");

  if (tenthSect.getBoundingClientRect().top < -400) {
    RemoveEffect.forEach((item) => {
      item.classList.add("fadeOutUpBig");
    });
  } else {
    RemoveEffect.forEach((item) => {
      item.classList.remove("fadeOutUpBig");
    });
  }
});

// ===================== Sticky Navbar =====================

const header = document.querySelector("#header-section");
const ul = document.querySelector("#header-section ul");
const logo = document.querySelector(".logo");
const logoImg = document.querySelector(".logo > img");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  if (scrollValue > 1) {
    header.classList.add("sticky");
    logo.classList.add("onscroll-logo");
    logo.style.setProperty("--remove", "none");
    ul.classList.add("onscroll-ul");
    header.classList.add("onscroll-header");
    menu.classList.add("onscroll-menu");
  }

  else {
    header.classList.remove("sticky");
    logo.classList.remove("onscroll-logo");
    logo.style.setProperty("--remove", "block");
    ul.classList.remove("onscroll-ul");
    header.classList.remove("onscroll-header");
    menu.classList.remove("onscroll-menu");
  }

});

// =============== Header Appear on Scroll Up ===================
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header-section').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight) {
    $('header').removeClass('scroll-down').addClass('scroll-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('scroll-up').addClass('scroll-down');
    }
  }

  lastScrollTop = st;
}

// =============== Close Popup on Click ===================
const popupBtn = document.querySelector(".popup-btn");
const popupBox = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");
const popupText = document.querySelector(".popup-btn h2");
const popupImg = document.querySelector(".popup-btn img");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupBtn.style.transform = "scale(1)";
  }, 4000)
})

popupText.addEventListener("click", () => {
  popupBox.style.transform = "scale(1)";
})

closePopup.addEventListener("click", () => {
  popupBox.style.transform = "scale(0)";
})

popupImg.addEventListener("click", () => {
  popupBtn.classList.toggle("active");
})

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  if (scrollValue > 0) {
    popupBtn.classList.remove("active");
  }
})


// ============== On Clicking Menu Items Sidebar Close ==================
const sidebarItem = document.querySelectorAll(".sidebar-item");
sidebarItem.forEach((item) => {
  item.addEventListener("click", () => {
    sideBar.style.left = "-100%";
  })
})

// ================ Preloader ====================
$(window).on('load', function () {
  $(".loader").delay(2000).fadeOut("slow");
  setTimeout(function () {
    $("#overlayer").addClass("loaded-page");
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  }, 2500);
})

// ================ Ninth Section Carousel ==============

$(function () {
  var owl = $(".ninth-carousel .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 50,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    animateOut: "slideOutLeft",
    animateIn: "slideInRight",
  });
});

// ================ Video Play on Scrolling to the Section =============

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height() - 500;

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).scroll(function () {

  $('#video-play').each(function () {
    if (isScrolledIntoView(this) === true) {
      document.getElementById('video-play').play();
    }
  });

});

const arrow = document.querySelector(".middle-arrow");
arrow.addEventListener("click", () => {
  document.querySelector("#eighth-section").scrollIntoView();
});
