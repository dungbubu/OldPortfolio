let list_product = [
  // Ghi chú về cách đặt tên Class
  //     presentation       : Đặt cho Slide Template
  //     curriculumVitae   : Đặt cho Curriculum Vitae


  {
    id:        1,
    class:     "presentation",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by: Mikoslide - Creative Market",
    style:     "style: Minimal, Mordern",
    updated:   "last updated: Apr 06, 2022",
    created:   "Apr 02, 2022",
    urlThumb1: "./img/product/PPT0001MD/thumbnail_Honey_1.webp",
    urlThumb2: "./img/product/PPT0001MD/thumbnail_Honey_2.webp",
    urlThumb3: "./img/product/PPT0001MD/thumbnail_Honey_3.webp",
    urlThumb4: "./img/product/PPT0001MD/thumbnail_Honey_4.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  }
];


// Import List Product rồi Render ra HTML
var html = '';
list_product.forEach(function(item, key) {
  html += appendHtml(item, key);
});
$('.grid').append(html);


function appendHtml(item, key){
  var html =
  `<div class="grid-item `+item.class+` key-`+key+`">
    <div class="carousel">
      <div class="carousel-cell"><img src="`+item.urlThumb1+`" alt="`+item.name+` Thumbnail(1)"></div>
      <div class="carousel-cell"><img src="`+item.urlThumb2+`" alt="`+item.name+` Thumbnail(2)"></div>
      <div class="carousel-cell"><img src="`+item.urlThumb3+`" alt="`+item.name+` Thumbnail(3)"></div>
      <div class="carousel-cell"><img src="`+item.urlThumb4+`" alt="`+item.name+` Thumbnail(4)"></div>
    </div>

    <button class="flickity-button flickity-button-open" type="button" onclick="openPopup(`+key+`)">
      <svg class="flickity-button-icon" viewBox="0 0 32 32"><path d="M15,20,7,28h5v4H0V20H4v5l8-8Zm5-5,8-8v5h4V0H20V4h5l-8,8Z"></path></svg>
    </button>
    <button class="flickity-button flickity-button-close" type="button" onclick="closePopup()">
      <svg class="flickity-button-icon" viewBox="0 0 32 32"><path d="M32,3l-7,7h5v4H18V2h4V7l7-7ZM3,32l7-7v5h4V18H2v4H7L0,29Z"></path></svg>
    </button>

    <div class="content">
      <h4>`+item.name+`</h4>
      
      <div class="credit">
        <div>`+item.credit+`</div>
        <div>`+item.style+`</div>
        <div>`+item.updated+`</div>
      </div>

      <div>`+item.function+`</div>
    </div>
  </div>`;
  return html;
}


// Flickity Carousel
var $carousel = $('.carousel').flickity({
  cellAlign: 'left',
  imagesLoaded: true,
  prevNextButtons: false,
});


// Tắt bật Popup
function openPopup(key) {
  $('.modalPopup').append(appendHtml(list_product[key], key));
  $('.modalPopup .carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    imagesLoaded: true,
    prevNextButtons: false,
  });
  $('.modalPopup').addClass('active');
};
function closePopup() {
  $('.modalPopup').empty();
  $('.modalPopup').removeClass('active');
};