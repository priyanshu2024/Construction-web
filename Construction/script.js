let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.fa-bars');
fabars.onclick = function(){
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-solid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay:true,
  });