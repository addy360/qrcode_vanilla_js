var typeNumber = 0;
var errorCorrectionLevel = "L";
var qr = qrcode(typeNumber, errorCorrectionLevel);
const data = `
    Calabash pub
    Menu
    Wali samaki - 6000
    Ugali samaki - 5000
    Wali nyama - 6000
    Makage mbuzi - 6000
    Ndizi samaki - 6000
    Mchemsho mbuzi - 6000
    Wali samaki - 6000
    Wali samaki - 6000
    Wali samaki - 6000
    Wali samaki - 6000


  
`;
try {
  qr.addData(data);
  qr.make();
  document.getElementById("main").innerHTML = qr.createImgTag();
} catch (error) {
  console.dir(error);
}
