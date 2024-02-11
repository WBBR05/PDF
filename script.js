const currentDate = new Date();
const formattedDate = `K datumu ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
document.getElementById("datum").innerHTML = formattedDate;
