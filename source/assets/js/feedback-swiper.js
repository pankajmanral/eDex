const feedbackSwiper = new Swiper('.feedbackSwiper',{
    loop : false,
    spaceBetween : 24,
    grabCursor : true,
    navigation : {
        nextEl : '.feedback-btn-next',
        prevEl : '.feedback-btn-prev'
    },
    pagination : {
        el : '.swiper-pagination'
    },
    breakpoints : {
        0 : {
            slidesPerView : 1
        },
        526 : {
            slidesPerView : 2
        },
        768 : {
            slidesPerView : 3
        }
    }
})