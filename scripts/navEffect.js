/**
 * Navbar effects and scrolltop buttons upon scrolling
 */
const navbar = document.getElementById("header-nav");
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("fixed-top", "shadow-sm", "navbar-light");
  } else {
    navbar.classList.remove("fixed-top", "shadow-sm", "navbar-light");
  }
};
