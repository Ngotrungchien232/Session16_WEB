let num1 = parseFloat(prompt("Nhập số thứ nhất: "));
let num2 = parseFloat(prompt("Nhập số thứ hai: "));
let num3 = parseFloat(prompt("Nhập số thứ ba: "));

if (
  !isNaN(num1) &&
  !isNaN(num2) &&
  !isNaN(num3) &&
  num1 !== num2 &&
  num2 !== num3 &&
  num1 !== num3
) {
  let maxNumber = Math.max(num1, num2, num3);
  alert("Số lớn nhất trong 3 số là: " + maxNumber);
} else {
  alert("Vui lòng nhập 3 số hợp lệ và khác nhau!");
}
