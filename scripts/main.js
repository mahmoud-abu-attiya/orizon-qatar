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

  // form popup
  let fromPopup = document.querySelector(".form-popup-container")
  let canselForm = document.querySelector(".cansel-form-popup")
  let openForm = document.querySelectorAll(".open-form-popup")
  let formOverlay = document.querySelector(".form-popup-overlay")
  openForm.forEach(btn => {
    btn.addEventListener("click",()=>{
      fromPopup.style.display = "grid"
    })
  })
  canselForm.addEventListener("click",()=>{
    fromPopup.style.display = "none"
  })
  formOverlay.addEventListener("click",()=>{
    canselForm.click()
  })

  // loading
  let loading = document.querySelector(".loading")
  let home = document.getElementById("homeLink")
  let services = document.getElementById("servicesLink")
  let work = document.getElementById("workLink")
  let about = document.getElementById("aboutLink")
  let contact = document.getElementById("contactLink")
  window.addEventListener("load", ()=>{
    loading.style.display = "none"

    // console.log(window.location.pathname)
    // if(window.location.pathname == "/"){
    //   home.parentNode.classList.add("page-active")
    //   console.log("we in home");
    // } else if(window.location.pathname == "/services.html"){
    //   services.parentNode.classList.add("page-active")
    //   console.log("we in services");
    // } else if(window.location.pathname == "/work.html"){
    //   work.parentNode.classList.add("page-active")
    //   console.log("we in work");
    // } else if(window.location.pathname == "/about.html"){
    //   about.parentNode.classList.add("page-active")
    //   console.log("we in about");
    // } else if(window.location.pathname == "/contact.html") {
    //   contact.parentNode.classList.add("page-active")
    //   console.log("we in contact");
    // } else {
    //   home.parentNode.classList.add("page-active")
    //   console.log("we in home");
    // }
  })

})();
