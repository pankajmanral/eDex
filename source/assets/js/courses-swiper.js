const coursesSwiper = new Swiper('.courses-swiper',{
	loop : false,
    slidesPerView : 4,
    spaceBetween : 24,
    grabCursor : true,
    navigation : {
        nextEl : '.courses-button-next',
        prevEl : '.courses-button-prev',
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