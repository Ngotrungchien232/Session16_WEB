let usdAmount = parseFloat(prompt("Nhập số tiền Đô la Mỹ: "));

const chien = 25000;

if (!isNaN(usdAmount)) {
  let vndAmount = usdAmount * chien;
  alert(
    usdAmount +
      " USD tương đương với " +
      vndAmount.toLocaleString("vi-VN") +
      " VND"
  );
} else {
  alert("Vui lòng nhập số tiền hợp lệ!");
}
