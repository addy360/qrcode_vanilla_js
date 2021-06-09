const textEl = document.getElementById("qrdata");
const qrcodeform = document.getElementById("qrcodeform");

qrcodeform.onsubmit = (e) => {
  e.preventDefault();
  const dataToGen = textEl.value || undefined;

  if (!dataToGen) return;

  genarate(dataToGen);
};

const genarate = (data) => {
  const typeNumber = 0;
  const errorCorrectionLevel = "L";
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  try {
    qr.addData(data);
    qr.make();
    document.querySelector(".qrcode__output").innerHTML = qr.createImgTag();
  } catch (error) {
    document.querySelector(".qrcode__output").innerHTML = JSON.stringify(error);
  }
};
