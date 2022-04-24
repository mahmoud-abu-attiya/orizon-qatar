(function () {
  "use strict";

  window.addEventListener("load", () => {
    on_page_load();
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: "top-left",
      duration: 600,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      disable: false,
    });
  }

  /**
   * Masonry Grid
   */
  var elem = document.querySelector(".grid");
  if (elem) {
    imagesLoaded(elem, function () {
      new Masonry(elem, {
        itemSelector: ".grid-item",
        percentPosition: true,
        horizontalOrder: true,
      });
    });
  }

const navbar = document.getElementById("header-nav");

  /**
   * Big Picture Popup for images and videos
   */
  // document.querySelectorAll("[data-bigpicture]").forEach(function (e) {
  //   e.addEventListener("click", function (t) {
  //     t.preventDefault();
  //     const data = JSON.parse(e.dataset.bigpicture);
  //     BigPicture({
  //       el: t.target,
  //       ...data,
  //     });
  //   });
  // });

  /**
   * Big Picture Popup for Photo Gallary
   */
  // document.querySelectorAll(".bp-gallery a").forEach(function (e) {
  //   var caption = e.querySelector("figcaption");
  //   var img = e.querySelector("img");
  //   // set the link present on the item to the caption in full view
  //   img.dataset.caption =
  //     '<a class="link-light" target="_blank" href="' +
  //     e.href +
  //     '">' +
  //     caption.innerHTML +
  //     "</a>";
  //   // window.console.log(caption, img)
  //   e.addEventListener("click", function (t) {
  //     t.preventDefault();
  //     BigPicture({
  //       el: t.target,
  //       gallery: ".bp-gallery",
  //     });
  //   });
  // });

  // scroll to top

  const scrollTop = document.getElementById("scrolltop");
  window.onscroll = () => {
    if (window.scrollY > 0) {
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  // Add your javascript here

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "scroll",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  let btnToggler = document.querySelector(".navbar-toggler");
  let togglerIcon = btnToggler.querySelector("i");
  let overlay = document.querySelector(".overlay");
  let headerNav = document.querySelector(".header-nav");
  btnToggler.addEventListener("click", () => {
    if (btnToggler.classList.contains("not-open")) {
      disableScroll();
      navbar.classList.add("shadow-sm", "bg-white");
      headerNav.style.zIndex = "11";
      btnToggler.classList.remove("not-open");
      togglerIcon.classList.add("fa-times");
      overlay.style.display = "block";
    } else {
      navbar.classList.remove("shadow-sm","navbar-dark", "bg-white");
      enableScroll();
      headerNav.style.zIndex = "3";
      btnToggler.classList.add("not-open");
      togglerIcon.classList.remove("fa-times");
      overlay.style.display = "none";
    }
  });
  overlay.addEventListener("click", () => {
    btnToggler.click();
  });
})();
