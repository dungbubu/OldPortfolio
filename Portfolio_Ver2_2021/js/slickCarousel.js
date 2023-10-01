// ------------ ------------ ------------ ------------ ------------ ------------
// Thêm trạng thái Active cho Menu đang được mở ------------ ------------
navItem[2].classList.add("active");


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm chạy thư viện Slick ------------ ------------
$('.slider-for').slick(
  {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

$('.slider-nav').slick(
  {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slider-for'
  });