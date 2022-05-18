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

  const sm = document.querySelector(".social-media-fix");
  const csm = document.querySelector(".social-media-fix .csm");
  const smas = document.querySelectorAll(".social-media-fix a");
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


  // send email
  function formSubmit(){
    let inpName = document.querySelector("#validationCustom01")
    let inpEmail = document.querySelector("#validationCustomEmail")
    let inpCompany = document.querySelector("#validationCustom03")
    let inpMsg = document.querySelector("#floatingTextarea2")
    let inpState = document.querySelector("#validationCustom04")
    let myState = {
        name: inpName.value,
        email: inpEmail.value,
        company: inpCompany.value,
        service: inpState.value,
        msg: inpMsg.value,
    }
    function sweetalert(){
      swal("Thanks!", "We will contact you as soon as possible.", "success")
      inpCompany.value = ''
      inpEmail.value = ''
      inpMsg.value = ''
      inpName.value = ''
      inpState.value = ''
    }
    fetch('https://formsubmit.co/ajax/mahmoudabuattiya106@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myState)
    })
    .then(sweetalert())
  }
  let forms = document.querySelectorAll("form")
  forms.forEach(form => {
    form.addEventListener("submit" , (e)=>{
      e.preventDefault();
      formSubmit();
    })
  })

  // loading
  let loading = document.querySelector(".loading")
  window.addEventListener("load", ()=>{
    loading.style.display = "none"
  })

})();
