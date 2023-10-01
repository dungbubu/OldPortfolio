// Content cho Watermark
function watermarkContent() {
  $('.watermark').append('01010111 01100101 01100010 00100000 01000100 01100101 01110011 01101001 01100111 01101110 01100101 01110010 00100000 01000100 01110101 01101110 01100111 01100010 01110101 01100010 01110101 00001010');
  const watermarkText = document.querySelector('.watermark');
  watermarkText.innerHTML = watermarkText.textContent.replace(/\S/g,"<span class=\"watermark-letter\">$&</span>");
}

  
// Cắt chuỗi chữ để tạo hiệu ứng chữ xoay tròn
const circleText = document.querySelector('.circle-Text');
circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class=\"circle-letter\">$&</span>");

let element = document.querySelectorAll('.circle-Text span');
for (let i = 0 ; i < element.length ; i++) {
  element[i].style.transform = "rotate(" + i * (360 / element.length) + "deg)";
}