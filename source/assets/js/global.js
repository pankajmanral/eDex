// $(document).ready(function(){
//     lazyLoadImages();
//     if ($('.modal-toggle').length > 0) { 
//         globalModal();
//     }
//     handleNavActiveState();
//     handleHeaderSpacing();
//     handleHamburgerMenu();
// });
// $(window).on('load', function(){
//     // headerheigt();
//     setTimeout(function () {
//         AOS.init({
//             once: true,
//             duration: 1000
//         });
//     }, 200); 
// });
// function handleHeaderSpacing() {
//     let header = document.querySelector(".main-header");
//     let pageWrapper = document.querySelector(".pageWrapper");

//     if (!header || !pageWrapper) {
//         console.error("Error: Header or pageWrapper not found!");
//         return;
//     }

//     let headerHeight = header.offsetHeight;
//     pageWrapper.style.paddingTop = headerHeight + "px";
// }

// // Run on load and resize
// document.addEventListener("DOMContentLoaded", handleHeaderSpacing);
// window.addEventListener("resize", handleHeaderSpacing);

// function lazyLoadImages() {
//     const lazyImages = Array.from(document.querySelectorAll("img.lazy"));
//     const lazyPictures = Array.from(document.querySelectorAll("picture.lazy"));
 
//     if ("IntersectionObserver" in window) {
//         const supportsWebP = (() => {
//             const elem = document.createElement("canvas");
//             return elem.getContext && elem.getContext("2d") ?
//                 elem.toDataURL("image/webp").indexOf("data:image/webp") === 0 : false;
//         })();
 
//         const isVisible = (element) => {
//             const style = window.getComputedStyle(element);
//             return style.display !== "none" && style.visibility !== "hidden" && parseFloat(style.opacity) > 0;
//         };
 
//         const options = { root: null, rootMargin: "200px 0px", threshold: 0 };
 
//         const lazyObserver = new IntersectionObserver((entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting && isVisible(entry.target)) {
//                     const lazyElement = entry.target;
 
//                     if (lazyElement.tagName.toLowerCase() === "picture") {
//                         const img = lazyElement.querySelector("img");
//                         const source = lazyElement.querySelector("source");
 
//                         if (source && source.dataset.srcset) {
//                             source.srcset = supportsWebP ? source.dataset.webp || source.dataset.srcset : source.dataset.srcset;
//                         }
//                         if (img && img.dataset.src) {
//                             img.src = supportsWebP ? img.dataset.webp || img.dataset.src : img.dataset.src;
//                             img.classList.remove("lazy");
//                         }
//                     } else if (lazyElement.tagName.toLowerCase() === "img") {
//                         lazyElement.src = supportsWebP ? lazyElement.dataset.webp || lazyElement.dataset.src : lazyElement.dataset.src;
//                         lazyElement.classList.remove("lazy");
//                     }
 
//                     observer.unobserve(lazyElement);
//                 }
//             });
//         }, options);
 
//         lazyImages.forEach((lazyImage) => lazyObserver.observe(lazyImage));
//         lazyPictures.forEach((lazyPicture) => lazyObserver.observe(lazyPicture));
//     } else {
//         // Fallback for older browsers
//         lazyImages.forEach((img) => {
//             img.src = img.dataset.src;
//             img.classList.remove("lazy");
//         });
//         lazyPictures.forEach((picture) => {
//             const img = picture.querySelector("img");
//             const source = picture.querySelector("source");
//             if (source && source.dataset.srcset) {
//                 source.srcset = source.dataset.srcset;
//             }
//             if (img && img.dataset.src) {
//                 img.src = img.dataset.src;
//             }
//             picture.classList.remove("lazy");
//         });
//     }
// }
 
// document.addEventListener("DOMContentLoaded", function () {
//     let scrollTopBtn = document.getElementById("scrollTopBtn");

//     if (!scrollTopBtn) return; // Avoid errors if button doesn't exist

//     // Show/hide button on scroll
//     window.addEventListener("scroll", function () {
//         scrollTopBtn.classList.toggle("show", document.documentElement.scrollTop > 100);
//     });

//     // Scroll to top when button is clicked
//     scrollTopBtn.addEventListener("click", scrollToTop);

//     // Scroll to top when Enter key is pressed while button is focused
//     scrollTopBtn.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             scrollToTop();
//         }
//     });

//     function scrollToTop() {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }
// });

// function globalModal() {
   
//     $('.modal-toggle').on('click', function (e) {
//         e.preventDefault();
//         var targetModal = $(this).data('target');
//         var $modal = $(targetModal);

//         // Store the currently focused element before opening modal
//         var previouslyFocusedElement = document.activeElement;
//         $modal.data('previous-focus', previouslyFocusedElement);

//         // Store current scroll position
//         var scrollTop = $(window).scrollTop();
//         $('html, body').addClass('no-scroll'); // Prevent scrolling
//         $('body').css({
//             'top': `-${scrollTop}px`,
//             'width': '100%'
//         }).attr('data-scroll', scrollTop);

//         // Show the modal
//         $modal.fadeIn();

//         // Move focus inside the modal
//         setTimeout(() => {
//             trapFocus($modal);
//         }, 100);
//     });

//     $('.close-button').on('click', function () {
//         closeModal($(this).closest('.modalWrapper'));
//     });

//     $(document).on('click', function (event) {
//         if ($(event.target).hasClass('modalWrapper')) {
//             closeModal($(event.target));
//         }
//     });

//     $(document).keydown(function (event) {
//         if (event.key === "Escape") { // ESC key
//             closeModal($('.modalWrapper:visible'));
//         }
//     });

//     function closeModal($modal) {
//         if ($modal.length) {
//             $modal.fadeOut();

//             // Restore original scroll position
//             var scrollTop = parseInt($('body').attr('data-scroll') || '0', 10);
//             $('html, body').removeClass('no-scroll');
//             $('body').css({
//                 'top': '',
//                 'width': ''
//             }).removeAttr('data-scroll');
//             window.scrollTo(0, scrollTop);

//             // Restore focus to previously focused element
//             var previousFocus = $modal.data('previous-focus');
//             if (previousFocus) {
//                 setTimeout(() => {
//                     $(previousFocus).focus();
//                 }, 50);
//             }
//         }
//     }
//     function trapFocus($modal) {
//         var focusableElements = $modal.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
//         var firstFocusableElement = focusableElements.first();
//         var lastFocusableElement = focusableElements.last();

//         if (firstFocusableElement.length) {
//             firstFocusableElement.focus();
//         }

//         $modal.on('keydown', function (e) {
//             if (e.key === 'Tab') {
//                 if (e.shiftKey) { // Shift + Tab
//                     if (document.activeElement === firstFocusableElement[0]) {
//                         e.preventDefault();
//                         lastFocusableElement.focus();
//                     }
//                 } else { // Tab
//                     if (document.activeElement === lastFocusableElement[0]) {
//                         e.preventDefault();
//                         firstFocusableElement.focus();
//                     }
//                 }
//             }
//         });
//     }
// }


// // header nav active js 
// function handleNavActiveState() {
//     let $navItems = $(".nav-list a");
//     let currentPage = window.location.pathname.split("/").pop();

//     // Set active class based on current page
//     $navItems.each(function () {
//         if ($(this).attr("href") === currentPage) {
//             $(this).parent().addClass("active");
//         }
//     });

//     // Handle click event for .nav-item (Prevent removing .services-dropdown active class)
//     $(".services-dropdown > .nav-item").on("click", function (e) {
//         e.preventDefault(); // Prevent default anchor behavior
//         $(this).parent().toggleClass("active"); // Keep parent active
//     });

//     // Handle click event for .dropdown-list links
//     $(".dropdown-list a").on("click", function () {
//         $(".dropdown-list").removeClass("active"); // Remove active from all dropdown items
//         $(this).parent().addClass("active"); // Add active to clicked dropdown item

//         // Remove .overflow-hidden class from body
//         $("body").removeClass("overflow-hidden");

//         // Remove .nav-area active class
//         $(".nav-area").removeClass("active");
//     });
// }


// function headerFixed() {
// // header js for fixed 
//     let header = document.querySelector(".main-header");
//     let nextElement = header.nextElementSibling; 
//     console.log(nextElement);
//     function adjustSpacing() {
//         if ($nextElement.length) {
//             let headerHeight = $header.outerHeight();
//             $nextElement.css("margin-top", headerHeight + "px");
//         }
//     }
    
//     function handleScroll() {
//         if ($(window).scrollTop() > 50) {
//             $header.addClass("sticky");
//         } else {
//             $header.removeClass("sticky");
//         }
//     }
//     adjustSpacing();
//     window.addEventListener("resize", adjustSpacing);
//     window.addEventListener("scroll", handleScroll);
// }


// function handleHamburgerMenu() {
//     let $menu = $("#hamburger-menu");
//     let $nav = $("#nav-area");
//     let $closeBtn = $(".close-btn");
//     let $body = $("body");

//     if (!$menu.length || !$nav.length || !$closeBtn.length) {
//         console.error("Error: Hamburger menu, nav area, or close button not found!");
//         return;
//     }

//     function openMenu() {
//         $nav.addClass("active");
//         $menu.addClass("active");
//         $body.addClass("overflow-hidden");
//     }

//     function closeMenu() {
//         $nav.removeClass("active");
//         $menu.removeClass("active");
//         $body.removeClass("overflow-hidden");
//     }

//     // Open menu on hamburger click
//     $menu.on("click", function (event) {
//         openMenu();
//         event.stopPropagation();
//     });

//     // Close menu on close button click
//     $closeBtn.on("click", function (event) {
//         closeMenu();
//         event.preventDefault();
//     });

//     // Close menu when clicking outside the menu
//     $(document).on("click", function (event) {
//         if (!$nav.is(event.target) && !$menu.is(event.target) && !$nav.has(event.target).length) {
//             closeMenu();
//         }
//     });
// }

// function setPageWrapperHeight() {
//     const pageWrapper = document.querySelector(".pageWrapper");
//     const header = document.querySelector(".main-header");
//     const footer = document.querySelector("footer");

//     if (!pageWrapper || !header || !footer) {
//         console.error("Error: One or more elements not found!");
//         return;
//     }

//     const windowHeight = window.innerHeight;
//     const headerHeight = header.offsetHeight;
//     const footerHeight = footer.offsetHeight;
    
//     const wrapperHeight = windowHeight - headerHeight - footerHeight;
//     pageWrapper.style.minHeight = wrapperHeight + "px";
// }

// // Run on load and resize
// document.addEventListener("DOMContentLoaded", setPageWrapperHeight);
// window.addEventListener("resize", setPageWrapperHeight);

// function handleHeaderSpacing() {
//     let header = document.querySelector(".main-header");
//     let pageWrapper = document.querySelector(".pageWrapper");

//     let headerHeight = header.offsetHeight;
//     pageWrapper.style.paddingTop = headerHeight + "px";
// }
 
// // Run on load and resize
// document.addEventListener("DOMContentLoaded", handleHeaderSpacing);
// window.addEventListener("resize", handleHeaderSpacing);
