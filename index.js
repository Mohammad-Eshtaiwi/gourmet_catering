const dateInput = document.querySelector(".date");
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getUTCFullYear();
if (month < 9) dateInput.value = `${year}-0${month}-${day}`;
else dateInput.value = `${year}-${month}-${day}`;
