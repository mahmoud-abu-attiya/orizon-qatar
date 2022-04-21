let imgs = document.querySelectorAll("#banner > img");
let i = 0;
setInterval(() => {
  imgs.forEach((img) => {
    img.classList.remove("show");
  });
  imgs[i++].classList.add("show");
  if (i >= 4) {
    i = 0;
  }
}, 7000);
