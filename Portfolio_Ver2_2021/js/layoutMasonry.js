// ------------ ------------ ------------ ------------ ------------ ------------
// Thêm trạng thái Active cho Menu đang được mở ------------ ------------
navItem[2].classList.add("active");


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm chạy thư viện Masonry ------------ ------------
$('.grid').imagesLoaded(function()
  {
    $('.grid').masonry(
      {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        stagger: 20,
        percentPosition: true
      });
  });
  
  $('.grid').on('click','.grid-item-small', function() 
    {
    //   $('.grid-item').removeClass('grid-item-small-2');
      $(this).toggleClass('grid-item-small-2');
      $('.grid').masonry();
    });

  $('.grid').on('click','.grid-item-large', function() 
    {
    //   $('.grid-item').removeClass('grid-item-large-2');
      $(this).toggleClass('grid-item-large-2');
      $('.grid').masonry();
    });