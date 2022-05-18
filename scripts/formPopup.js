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