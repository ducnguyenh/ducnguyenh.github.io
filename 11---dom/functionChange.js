//1. function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
    document.getElementById("paragraph1").style.color = 'blue';
    document.getElementById("paragraph2").style.color = 'yellow';
    document.getElementById("paragraph3").style.color = 'red';
    document.get
}

//2.function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
    document.getElementById('body-view').style.background = color;
}

// 3.function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào có thể là id của 2 đoạn văn).
// 4.function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
// 5.function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
// 6.function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.