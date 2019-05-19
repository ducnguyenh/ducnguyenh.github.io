// Bài 1. Viết 1 function tính bình phương của 1 số.
function bai1(a) {
  if (typeof(a) == "string") {
    return false;
  }
  else {
    return a**2;
  }
}

//Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
function bai2(b) {
  if (Number.isInteger(b) == true && b > 0) {
    return Math.ceil(b/100)
  }
  else {
    return false;
  }
}

//Bài 3. Cho 1 chuỗi dài hơn 30 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
function divList (sequence) {
	return (sequence.slice(0,10) + "...")
}

//Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
function firstTitle (sequence) {
	var title = sequence.charAt(0).toUpperCase();
	return  title + sequence.slice(1).toLowerCase();
}

//Bài 5. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
function findMin (inputData){
	function compare(a, b) {
		return a-b;
	}
	return inputData.sort(compare)[0]
}

//Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.
function studentList (inputData){
	document.write(inputData.sort().join("<br />"))
}