const swiperEspecial = new Swiper('.swiper-especial', {

      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      spaceBetween:100,
      autoplay: {
        delay:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
      },
  
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  });

  const swiper = new Swiper('.swiper-habitual', {

      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      spaceBetween:200,
      autoplay: {
        delay:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
      },
  
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  });
  const swiperHero = new Swiper('.swiper-hero', {
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
  
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      },
  
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }
  });
