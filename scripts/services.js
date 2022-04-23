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


let dd = document.querySelectorAll("#dd .dd")
let e = 0;
setInterval(() => {
  dd.forEach((d) => {
    d.classList.remove("change")
  });
  dd[e++].classList.add("change")
  if(e >= 9){
    e = 0;
  }
}, 7000);