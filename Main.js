const buyNowButtons = document.querySelectorAll('.buy-now');

buyNowButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Thực hiện hành động khi người dùng nhấp vào "Mua ngay"
    addToCart(id, name, price);
  });
});

function addToCart(id, name, price) {
  // Thêm mã xử lý để chuyển thông tin sản phẩm qua trang giỏ hàng ở đây
  // Bạn có thể sử dụng localStorage hoặc gửi dữ liệu đến máy chủ

  // Ví dụ:
  const cartItem = {
    id: id,
    name: name,
    price: price
  };

  // Lưu trữ thông tin sản phẩm vào localStorage
  let cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : []; // Chuyển đổi từ chuỗi JSON thành mảng JavaScript

  cart.push(cartItem);

  localStorage.setItem('cart', JSON.stringify(cart)); // Chuyển đổi mảng JavaScript thành chuỗi JSON và lưu vào localStorage
}