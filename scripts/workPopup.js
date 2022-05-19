let cards = document.querySelectorAll(".or_work")
let canselPopup = document.querySelectorAll(".cansel-popup")



cards.forEach(card => {
  card.addEventListener("click" , () => {
    card.parentElement.classList.add("card_popup")
    card.dataset.aos = " "
  })
  canselPopup.forEach(c => {
    c.addEventListener("click" , () => {
      card.parentElement.classList.remove("card_popup")
      card.dataset.aos = "fade-up"
    })
  })
})
