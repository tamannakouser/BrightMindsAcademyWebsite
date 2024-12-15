var TrendingSlider = new Swiper('.trending-slider', {
  effect: 'coverflow', // Continue using coverflow effect
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,      // No rotation
    stretch: 1,     // No stretch between slides
    depth: 200,     // Depth effect (the closer the slide, the more zoomed in)
    modifier: 2.5,  // Speed modifier for 3D effect
  },
  zoom: {
    maxRatio: 20,     // Max zoom (you can change this value for more/less zoom)
    minRatio: 1,     // Min zoom (this will keep the original size)
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 1000,  // Automatic transition every 2 seconds
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
  speed: 500,  // Duration of the transition (in ms)
});
