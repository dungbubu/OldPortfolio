// Content cho Watermark
function watermarkContent() {
  $('.watermark').append('<h1>dungbubu</h1>');
}


// Hàm cắt HashID để lọc
function getHashFilter() {
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}


// Hàm chạy thư viện ImagesLoaded > Isotope > Masonry
// var $grid = $('.grid').imagesLoaded( function() {
//   $grid.isotope({
  var $grid = $('.grid').isotope({
    // itemSelector: '.grid-item',
    itemSelector: 'none',
    stagger: 20,
    percentPosition: true,
    masonry: {
               columnWidth: '.grid-sizer',
               gutter: '.gutter-sizer'
             },
    // nicer reveal transition
    visibleStyle: {transform: 'translateY(0)', opacity: 1},
    hiddenStyle: {transform: 'translateY(100px)', opacity: 0},
  });
// });

// initial items reveal
$grid.imagesLoaded( function() {
  $grid.removeClass('are-images-unloaded');
  $grid.isotope( 'option', { itemSelector: '.grid-item' });
  var $items = $grid.find('.grid-item');
  $grid.isotope( 'appended', $items );
});


// Hack CodePen to load pens as pages
var nextPenSlugs = [
                     '202252c2f5f192688dada252913ccf13',
                     'a308f05af22690139e9a2bc655bfe3ee',
                     '6c9ff23039157ee37b3ab982245eef28',
                   ];
function getPenPath() {
  var slug = nextPenSlugs[this.loadCount];
  if (slug) {return '/desandro/debug/' + slug;}
}


// get Isotope instance
var iso = $grid.data('isotope');
$grid.infiniteScroll({
  path: getPenPath,
  append: '.grid-item',
  outlayer: iso,
  status: '.page-load-status',
});


// Thay đổi HashID khi click filter button
var $filters = $('.filter-button-group').on( 'click', 'button', function() {
  var filterAttr = $(this).attr('data-filter');
  // Đặt filter vào HashID
  location.hash = 'filter=' + encodeURIComponent( filterAttr );
});


// Filter theo HashID
var isIsotopeInit = false;
function onHashchange() {
  var hashFilter = getHashFilter();
  if ( !hashFilter && isIsotopeInit ) {return; }
  isIsotopeInit = true;
  // Filter isotope theo HashID
  $grid.isotope({
    itemSelector: '.grid-item',
    filter: hashFilter
  });
// Hàm kiểm tra và thêm trạng thái Click cho các button
  if ( hashFilter ) {
    $filters.find('.is-checked').removeClass('is-checked');
    $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
  }
}


// Thay đổi và cập nhật HashID
$(window).on( 'hashchange', onHashchange );
onHashchange();


// Hàm tạo hiệu ứng click để phóng to ảnh trong List Project
$('.grid').on('click','.grid-active', function() {
  $(this).toggleClass('grid-item-active');
  $grid.isotope();
});