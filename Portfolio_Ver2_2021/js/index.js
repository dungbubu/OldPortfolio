// ------------ ------------ ------------ ------------ ------------ ------------
// Dark Mode (Coming soon) ------------ ------------
let darkModeItem = [document.querySelector("body")];

function updateTime() 
  {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    if (window.matchMedia('(prefers-color-scheme: dark)').matches || hour >= 20 && minutes >= 0  || hour <= 4 && minutes <= 60)
    // Check xem Window có đang ở chế độ DarkMode hay không hoặc sau 10pm thì tự động chuyển chế độ
      {
        darkModeItem.forEach(function(element)
          {
            // element.classList.add("darkMode");
            console.log("");
          });         
      }
  }
updateTime();
setInterval(updateTime, 1000); // Update theo từng giây


// ------------ ------------ ------------ ------------ ------------ ------------
// Drag to Scroll (Coming soon) ------------ ------------


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm add/remove trạng thái Active khi "click" vào các nút trên Menu ------------ ------------
let navItem = [...document.getElementsByClassName("navItem")];

navItem.forEach(function(element) 
  {
    element.addEventListener("click" ,function()
      {
        element.classList.add("active");
        
        var sibling = navItem[0];
        while (sibling) 
          {
            if (sibling.nodeType === 1 && sibling !== element) 
              {
                sibling.classList.remove("active");
              }
            sibling = sibling.nextSibling
          }
      });
  });


// ------------ ------------ ------------ ------------ ------------ ------------
// Hàm tạo hiệu ứng cho Humburger menu ------------ ------------
function hamburgerFunction() 
  {
    document.querySelector(".burgerMenu").classList.toggle("toggle");
    document.querySelector(".modal").classList.toggle("toggle");
  }