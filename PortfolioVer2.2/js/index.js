// Câu chào trong Console
// console.clear();
console.log("%c😎 Hey, hi there!","font-size: 24px;",);
console.log("%cWhatcha Doin'?","font-size: 12px;");
console.log("%cWould you like a cup of coffee ☕?","font-size: 12px;");


// Content cho Html
includeHTML();


var theme = localStorage.getItem('data-theme');
if (!theme) {
  // $('html').setAttribute('data-theme', "light");
  $('html').attr('data-theme', "light");
}
var root = document.querySelector(':root');


window.onload = function () {
  // Gọi hàm lấy content cho Watermark
  watermarkContent();


  // Khai báo trạng thái Theme Mode
  switch (theme) {
    case "dark":
      $('.decorBg').css({"width":"200vmax", "height":"200vmax"});
      $('.toggleDarkmode').html('lightmode');
      root.setAttribute('data-theme', "dark");
      break;
    case "light":
      $('.decorBg').css({"width":"0", "height":"0"});
      $('.toggleDarkmode').html('darkmode');
      root.setAttribute('data-theme', "light");
      break;
  }
};


// Chuyển đổi chế độ Darkmode
var flag=false;
function toggleDarkmode () {
  flag = !flag;
  // Đang là theme light thì chuyển thành dark
  if (flag) {
    $('.decorBg').css({"width":"200vmax", "height":"200vmax"});
    $('.toggleDarkmode').html('lightmode');
    root.setAttribute('data-theme', "dark");
    localStorage.setItem("data-theme", "dark");
  }
  // Đang là theme dark thì chuyển thành light
  else {
    $('.decorBg').css({"width":"0", "height":"0"});
    $('.toggleDarkmode').html('darkmode');
    root.setAttribute('data-theme', "light");
    localStorage.setItem("data-theme", "light");
  }
};


// Chuyển đổi chế độ Soundmode
//   $('.toggleSoundmode').on('click', function () {
//     var song = new Audio();
//     song.src = '../audio/MerryGoRoundOfLife-Morunas.mp3';
//     song.play();
//   });


// Thay đổi con trỏ chuột
$(window).mousemove(function(e) { 
  $('.cursor').css({left: e.pageX, top: e.pageY })

  $('a, .flip-box')
  .on('mouseenter', function() {$('.cursor').addClass('focus')})
  .on('mouseleave', function() {$('.cursor').removeClass('focus')})
})


// Humburger menu
function hamburgerFunction() {
  $('.burgerMenu').toggleClass('toggle');
  $('.modal').toggleClass('toggle');
};