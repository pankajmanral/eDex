const coursesSwiper = new Swiper('.courses-swiper',{
	loop : true,
    slidesPerView : 4,
    spaceBetween : 9,
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
            slidesPerView : 4
        }
    }
})