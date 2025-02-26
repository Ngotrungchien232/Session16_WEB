let chien = parseFloat(prompt("Nhập nhiệt độ (°C): "));

if (!isNaN(chien)) {
  let fahrenheit = (chien * 9) / 5 + 32;
  alert(chien + "°C tương đương với " + fahrenheit.toFixed(2) + "°F");
} else {
  alert("Vui lòng nhập nhiệt độ hợp lệ!");
}
