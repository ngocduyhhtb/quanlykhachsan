display = () => {
  var ele = document.getElementById('btn-data');
  if (ele.style.display === 'none') {
    ele.style.display = "block";
  }
  ele.style.display = "none";
}
decrement = (inputId, inputId2) => {
  let value = parseInt(document.getElementById(inputId).value);
  value = isNaN(value) ? 0 : value;
  if (value >= 1) {
    value--;
  }
  document.getElementById(inputId2).value = value;
  document.getElementById(inputId).value = value;
};
increment = (inputId, inputId2) => {
  let value = parseInt(document.getElementById(inputId).value);
  value = isNaN(value) ? 0 : value;
  if (value <= 9) {
    value++;
  }
  document.getElementById(inputId2).value = value;
  document.getElementById(inputId).value = value;
}
