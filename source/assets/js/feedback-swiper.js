const feedbackSwiper = new Swiper('.feedbackSwiper',{
    loop : true,
    spaceBetween : 24,
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    pagination : {
        el : '.swiper-pagination'
    },
    breakpoints : {
        0 : {
            slidesPerView : 1
        },
        768 : {
            slidesPerView : 2,
            spaceBetween : 12
        },
        991 : {
            slidesPerView : 3
        }
    }
})