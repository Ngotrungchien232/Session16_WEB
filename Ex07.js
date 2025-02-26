let math = parseFloat(prompt("Nhập điểm môn Toán: "));
let physics = parseFloat(prompt("Nhập điểm môn Vật lý: "));
let chemistry = parseFloat(prompt("Nhập điểm môn Hóa học: "));

if (!isNaN(math) && !isNaN(physics) && !isNaN(chemistry)) {
  let chien = (math + physics + chemistry) / 3;
  alert("Điểm trung bình của 3 môn là: " + chien.toFixed(2));
} else {
  alert("Vui lòng nhập điểm hợp lệ cho tất cả các môn!");
}
