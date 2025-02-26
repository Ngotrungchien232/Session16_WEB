let firstNumber = parseFloat(prompt("Nhập số thứ nhất: "));
let secondNumber = parseFloat(prompt("Nhập số thứ hai: "));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  let sum = firstNumber + secondNumber;
  alert("Tổng của hai số là: " + sum);
} else {
  alert("Vui lòng nhập số hợp lệ!");
}
