let num1 = parseInt(prompt("Nhập số thứ nhất: "));
let num2 = parseInt(prompt("Nhập số thứ hai: "));

if (!isNaN(num1) && !isNaN(num2)) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(
    "Số ngẫu nhiên trong khoảng từ " + min + " đến " + max + " là: " + randomNum
  );
} else {
  alert("Vui lòng nhập số nguyên hợp lệ!");
}
