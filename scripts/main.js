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

  const sm = document.querySelector("nav .social-media");
  const csm = document.querySelector("nav .social-media .csm");
  const smas = document.querySelectorAll("nav .social-media a");
  const sidebar = document.querySelector("aside");
  const openbar = document.querySelector("aside .openbar");
  const closebar = document.querySelector("aside .closebar");
  sm.onmousemove = () => {
    csm.classList.add("show_social_media");
    smas.forEach((sma) => {
      sma.classList.add("show_social_media_a");
    });
  };
  sm.onmouseleave = () => {
    smas.forEach((sma) => {
      sma.classList.remove("show_social_media_a");
    });
    csm.classList.remove("show_social_media");
  };
  openbar.addEventListener("click", () => {
    sidebar.classList.add("open_aside");
  });
  closebar.addEventListener("click", () => {
    sidebar.classList.remove("open_aside");
  });
})();
