// Slider
$('.w-slide .slider ul').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  speed: 300,
  dots:true,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 767,
          settings: {
            dots:false,
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

// Form
$(document).ready(function () {
  $(".w-form .formReview .comments .addReview").click(() => {
    $(".w-form .formShow").removeClass("d-none");
    $(".w-form .formReview").addClass("hide");
  });
  $(".w-form .formShow .button .cancel").click(() => {
    $(".w-form .formReview").removeClass("hide");
    $(".w-form .formShow").addClass("d-none");
  });
});

//menu-mobile
$(document).ready(function () {
  $('#open').on('click', function () {
      $('.w-header .navmobi ul').addClass('show');
      $(this).addClass('d-none');
      $('#close').removeClass('d-none');
  })
  $('#close').on('click', function () {
      $(this).addClass('d-none');
      $('#open').removeClass('d-none');
      $('.w-header .navmobi ul').removeClass('show');
  })
});


