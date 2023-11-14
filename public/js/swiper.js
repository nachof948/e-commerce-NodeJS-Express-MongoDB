const swiperEspecial = new Swiper('.swiper-especial', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      spaceBetween:100,
      autoplay: {
        delay:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
      },
  
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  });
  const swiper = new Swiper('.swiper-habitual', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      autoplay: {
        delay:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
      },
  
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  });
  const swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      slidesPerView: 1,
      autoplay: {
        delay:4000,
        speed:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
      },
  
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  
    // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }
  });
