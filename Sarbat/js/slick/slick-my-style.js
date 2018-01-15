  $(document).ready(function(){
  $('.my-slider').slick({
    arrows: true,
    nextArrow: '<i class="fa fa-angle-right fa-3x right-arrow" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left fa-3x left-arrow" aria-hidden="true"></i>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 300,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        infinite: true,
        autoplay: true
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
});