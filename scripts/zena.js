let zena = document.querySelectorAll(".zena")
zena.forEach((z)=>{
  window.addEventListener("load",()=>{
    z.classList.add("z-ani")
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    997: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let nextBtn = document.querySelector(".swiper-button-next")
let prevBtn = document.querySelector(".swiper-button-prev")
let sliders = document.querySelectorAll(".swiper-slide")
let swiperWrapper = document.querySelectorAll(".swiper-wrapper")

console.log(swiperWrapper.style)

function removeActiveClass() {
  sliders.forEach(slider => {
    slider.classList.remove("slider-active")
  })
}
removeActiveClass()

document.querySelector(".swiper-slide-active").nextElementSibling.classList.add("slider-active")

// nextBtn.addEventListener("click" , () => {
//   removeActiveClass()
//   addActiveClass()
// });
// prevBtn.addEventListener("click" , () => {
//   removeActiveClass()
//   addActiveClass()
// });


swiper.on('slideChange', function () {
  console.log("change");
  removeActiveClass()
  // document.querySelector(".slider-active").nextElementSibling.classList.add("slider-active")
  console.log("change2");
});