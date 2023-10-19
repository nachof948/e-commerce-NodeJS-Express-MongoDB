const swiperEspecial = new Swiper('.swiper-especial', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
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
  
    // Navigation arrows
  /*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }, */
  
    // And if we need scrollbar
  /*     scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      }, */
  });
  const swiper = new Swiper('.swiper-habitual', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
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
  
    // Navigation arrows
  /*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }, */
  
    // And if we need scrollbar
  /*     scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      }, */
  });
  const swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
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
  
    // And if we need scrollbar
  /*     scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      }, */
  });
