
document.addEventListener("DOMContentLoaded", function () {
 var productItems = document.querySelectorAll(".card");
 var btnLoadMore = document.querySelector(".btn-load-more");

 var itemsToShow = 6; // Số lượng sản phẩm muốn hiển thị mỗi lần nhấp vào nút "Xem thêm sản phẩm"
 var visibleItems = 0; // Số lượng sản phẩm đã hiển thị

 // Ẩn tất cả sản phẩm
 for (var i = 0; i < productItems.length; i++) {
     productItems[i].style.display = "none";
 }

 // Hiển thị số lượng sản phẩm ban đầu
 for (var i = 0; i < itemsToShow; i++) {
     if (productItems[i]) {
         productItems[i].style.display = "block";
         visibleItems++;
     }
 }

 // Xử lý sự kiện nhấp vào nút "Xem thêm sản phẩm"
 btnLoadMore.addEventListener("click", function () {
     var hiddenItems = document.querySelectorAll(".card:not([style*='display: block'])");
     var itemsToDisplay = Math.min(hiddenItems.length, itemsToShow);

     for (var i = 0; i < itemsToDisplay; i++) {
         hiddenItems[i].style.display = "block";
         visibleItems++;
     }

     if (visibleItems >= hiddenItems.length) {
         btnLoadMore.style.display = "none";
     }
 });
});
