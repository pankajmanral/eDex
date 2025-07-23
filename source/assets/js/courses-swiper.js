  const swiper = new Swiper('.courses-card-wrapper', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: false,
    // Optional: add responsive breakpoints
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 }
    }
  });