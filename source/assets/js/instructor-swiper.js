const instuctorSwiper = new Swiper('.instructor-swiper',{
    loop : true,
    slidesPerView : 4,
    spaceBetween : 9,
    navigation : {
        nextEl : '.instructor-btn-next',
        prevEl : '.instructor-btn-prev',
    },
    centeredSlide : true,
    breakpoints : {
        0 : {
            slidesPerView : 1
        },
        526 : {
            slidesPerView : 2
        },
        768 : {
            slidesPerView : 3
        },
        1025 : {
            slidesPerView : 4
        }
    },
    pagination : {
        el : '.swiper-pagination'
    }
})