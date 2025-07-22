// $(document).ready(function(){
//     bannerSlider();
// });

// function bannerSlider() {
//     var $sliderWrapper = $(".banner-slider .swiper-wrapper");
//     var slideCount = $sliderWrapper.children().length;

//     if (slideCount > 1) { 
//         var swiper = new Swiper(".banner-slider", {
//             slidesPerView: 1,
//             loop: true,
//             spaceBetween: 80,
//             speed: 800, 
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//             breakpoints: {
//                 0: { 
//                     pagination: {
//                         el: ".swiper-pagination",
//                         clickable: true,
//                     }
//                 },
//                 768: { 
//                     pagination: false, 
//                 }
//             }
//         });

//         // Detect focus on any focusable element inside slides
//         $(".banner-slider .swiper-slide *").on("focus", function () {
//             var slideIndex = $(this).closest(".swiper-slide").index();
//             swiper.slideToLoop(slideIndex);
//         });

//     } else {
//         $(".swiper-button-next, .swiper-button-prev").hide();
//     }
// }


// Load Lottie animation
    lottie.loadAnimation({
      container: document.getElementById('lottie-container'), // the DOM element
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/json/line-graph.json' // Lottie file URL
    });
