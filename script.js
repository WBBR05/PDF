//Datum
const currentDate = new Date();
const formattedDate = `K datumu ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
document.getElementById("datum").innerHTML = formattedDate;
//PDF stiahnutie
var opt = {
    filename: 'Výdajka.pdf',
    margin: 0.05,
    html2canvas: { scale: 2},
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
}
function generatePDF(){
    const element = document.getElementById("pdf");
    html2pdf().set(opt).from(element).save();
}