let parallax = document.querySelectorAll(".parallex")
let parallaxB = document.querySelectorAll(".parallex-b")

parallax.forEach( p => {
  window.addEventListener("scroll" , ()=>{
    let offcet = window.pageYOffset
    p.style.transform = `translateY(${offcet * 0.7 }px)`
  })
})
// parallaxB.forEach( b => {
//   window.addEventListener("scroll" , ()=>{
//     let offcet = window.pageYOffset
//     b.style.backgroundPositionY = offcet * -0.75 + "px"
//   })
// })