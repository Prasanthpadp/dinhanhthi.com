// cf. settings at http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.thiCarousel').slick({
  centerMode: true,
  accessibility: true,
  centerPadding: '60px',
  slidesToShow: 5,
  variableWidth: true,
  centerMode: true, 
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
] 
  });
});