//Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

//ketika klik hamburger-menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk hilangin nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) & !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
})

