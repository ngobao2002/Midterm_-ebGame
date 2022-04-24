let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
    search.classList.remove('active');
    
}

// Notification
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active')
}

// Search
let search = document.querySelector('.search');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
    
}
// Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  //Custom Scroll Bar
  window.onscroll = function(){mufunction()};

  function mufunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) *100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
  }
// Search
  // var scene = new Scene({
  //   ".searchbox": {
  //     "0%" : "width: 50px",
  //     "70%": "width: 300px",
  //   },
  //   ".line": {
  //     "30%" : "width: 0%",
  //     "100%": "width: 100%",
  //   }
  // }, {
  //   duration: 1,
  //   easing: Scene.EASE_IN_OUT,
  //   selector: true,
  // }).exportCSS();
  
  // scene.setTime(0);
  // var toggle = false;
  
  // document.querySelector(".submit").addEventListener("click", function() {
  //   toggle = !toggle;
  //   scene.setDirection(toggle ? "normal" : "reverse");
  //   scene.play();
  // });